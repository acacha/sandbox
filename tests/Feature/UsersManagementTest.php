<?php

namespace Tests\Feature;

use Acacha\Users\Events\UserCreated;
use Acacha\Users\Events\UserInvited;
use Acacha\Users\Mail\UserInvitation;
use Acacha\Users\Models\UserInvitation as UserInvitationModel;
use App\User;
use Auth;
use Event;
use Faker\Factory;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Mail;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Tests\TestCase;

/**
 * Class UsersManagementTest.
 *
 * @package Tests\Feature
 */
class UsersManagementTest extends TestCase
{

    use DatabaseMigrations;

    /**
     * Unauthorized user cannot browse users management.
     *
     * @test
     * @return void
     */
    public function unauthorized_user_cannot_browse_users_management()
    {
        $response = $this->get('/management/users');

        $response->assertStatus(302);
    }

    /**
     * A user cannot browse users management.
     *
     * @test
     * @return void
     */
    public function a_user_cannot_browse_users_management()
    {
        $this->signIn();
        $response = $this->get('/management/users');
        $response->assertStatus(403);
    }

    /**
     * Check app already have manage-users permission.
     *
     * @test
     */
    public function check_app_already_have_manage_users_permissions()
    {
        $this->seedPermissions();
        $this->assertRoleExists('manage-users');
        //Users
        $this->assertPermissionExists('see-manage-users-view');
        $this->assertPermissionExists('list-users');
        $this->assertPermissionExists('create-users');
        $this->assertPermissionExists('view-users');
        $this->assertPermissionExists('edit-users');
        $this->assertPermissionExists('delete-users');
        //User invitations
        $this->assertPermissionExists('see-manage-user-invitations-view');
        $this->assertPermissionExists('list-user-invitations');
        $this->assertPermissionExists('send-user-invitations');
        $this->assertPermissionExists('view-user-invitations');
        $this->assertPermissionExists('edit-user-invitations');
        $this->assertPermissionExists('delete-user-invitations');

    }

    /**
     * Authorized user can browse users managment.
     *
     * @test
     * @return void
     */
    public function authorized_user_can_browse_users_management()
    {
        $response = $this->signInAsUserManager()
            ->get('/management/users');

        $response->assertStatus(200);
    }

    /**
     * Api show a 302 error listing all users if request is not done by XHR.
     *
     * @test
     */
    public function api_show_302_listing_all_users_if_no_xhr_request()
    {
        $this->get('/api/v1/management/users')
             ->assertStatus(302)
             ->assertRedirect('login');
    }

    /**
     * Api show 401 listing all users for unauthorized users.
     *
     * @test
     */
    public function api_show_401_listing_all_users_for_unauthorized_users()
    {
        $this->json('GET','/api/v1/management/users')
            ->assertStatus(401);
    }


    /**
     * Api show an user for authorized users correctly.
     *
     * @test
     */
    public function api_show_an_user_for_authorized_users_correctly()
    {
        $this->signInAsUserManager('api')
            ->json('GET', '/api/v1/management/users')
            ->assertStatus(200)

            ->assertJson([
                'current_page' => 1,
                'data' => [
                    ['id'=> Auth::user()->id,
                    'name' =>  Auth::user()->name,
                    'email' => Auth::user()->email,
                    'created_at' => Auth::user()->created_at->toDateTimeString(),
                    'updated_at' => Auth::user()->updated_at->toDateTimeString()
                    ]
                ],
                'from' => 1,
                'last_page' => 1,
                'next_page_url' => null,
                'per_page' => 15,
                'prev_page_url' => null,
                'to' => 1,
                'total' => 1
            ]);
    }

    /**
     * Api show all users for_authorized_users.
     *
     * @test
     */
    public function api_show_all_users_for_authorized_users_with_correct_structure()
    {
        factory('App\User',10)->create();
        $this->signInAsUserManager('api')
            ->json('GET','/api/v1/management/users')
            ->assertJsonStructure(['data' => [
                    '*' => [
                        'id', 'name', 'email','created_at','updated_at'
                ]
            ]]);
    }

    /**
     * Api show a 302 error creating a user if request is not done by XHR.
     *
     * @test
     */
    public function api_show_302_creating_user_if_no_xhr_request()
    {
        $this->post('/api/v1/management/users')
            ->assertStatus(302)
            ->assertRedirect('login');
    }

    /**
     * Api show 401 listing creating_user for unauthorized users.
     * @test
     */
    public function api_show_401_creating_user_for_unauthorized_users()
    {
        $this->json('POST','/api/v1/management/users')
            ->assertStatus(401);
    }

    /**
     * Post user creation.
     */
    private function post_user_creation($name, $email, $password)
    {
        return $this->json('POST','/api/v1/management/users', [
            'name' => $name,
            'email' => $email ,
            'password' => bcrypt($password)
        ]);
    }

    /**
     * Api create user.
     *
     * @test
     */
    public function api_create_user()
    {
        $faker = Factory::create();

        $this->publishFactories();
        $this->signInAsUserManager('api');
        Event::fake();
        $response = $this->post_user_creation($name = $faker->name,
            $email = $faker->unique()->safeEmail, 'secret');

        $this->assertDatabaseHas('users', [
            'name' => $name,
            'email' => $email
        ]);

        Event::assertDispatched(UserCreated::class, function ($e) use ($name,$email) {
            return $e->user->name === $name && $e->user->email === $email;
        });

        $response->assertStatus(200)
            ->assertExactJson([ 'created' => true ]);

    }

    /**
     * Api create user.
     *
     * @test
     */
    public function api_create_user_check_validations()
    {
        $faker = Factory::create();

        $this->publishFactories();
        $this->signInAsUserManager('api');

        $response = $this->post_user_creation('', $faker->unique()->safeEmail, 'secret');
        $this->assertResponseValidation($response,422,'name','The name field is required.');

        $response = $this->post_user_creation(str_random(256), $faker->unique()->safeEmail, 'secret');
        $this->assertResponseValidation($response,422,'name','The name may not be greater than 255 characters.');

        $response = $this->post_user_creation($faker->name, '', 'secret');
        $this->assertResponseValidation($response,422,'email','The email field is required.');

        $response = $this->post_user_creation($faker->name, 'sdsfsdfsfdsdfe@dadddaasdasdaseqwerqwqqweqwqwewqeqweeqwsqweawedqweqweqweawerwaerwearwerw.com', 'secret');
        $this->assertResponseValidation($response,422,'email','The email must be a valid email address.');

        $user = factory(User::class)->create();
        $response = $this->post_user_creation($faker->name, $user->email, 'secret');
        $this->assertResponseValidation($response,422,'email','The email has already been taken.');


    }
    /**
     * Assert Response validation.
     */
    private function assertResponseValidation($response, $statusCode, $field, $email){
        $response->assertStatus($statusCode)->assertExactJson([
            $field => [
                0 => $email
            ]
        ]);
    }

    /**
     * Show user.
     *
     * @param $id
     * @return \Illuminate\Foundation\Testing\TestResponse
     */
    private function show_user($id) {
        return $this->json('GET','api/v1/management/users/' . $id);
    }

    /**
     * Unauthenticated users cannot show user invitations.
     *
     * @test
     */
    public function unauthenticated_users_cannot_show_user() {
        $response = $this->show_user(1);
        $response->assertStatus(401);
    }

    /**
     * Unauthorized users cannot show user invitations.
     *
     * @test
     */
    public function unauthorized_users_cannot_show_user() {
        $this->signIn(null,'api');
        $response = $this->show_user(1);
        $response->assertStatus(403);
    }

    /**
     * Api show user.
     *
     * @test
     */
    public function api_show_user()
    {
        $user = $this->createUser();
        $this->signInAsUserManager('api');
        $response = $this->show_user($user->id);
        $response->assertStatus(200)
            ->assertJson([
                'id'=> $user->id,
                'name' =>  $user->name,
                'email' => $user->email,
                'created_at' => $user->created_at->toDateTimeString(),
                'updated_at' => $user->updated_at->toDateTimeString()
            ]);
    }

    /**
     * Edit user.
     *
     * @param $id
     * @param array $data
     * @return \Illuminate\Foundation\Testing\TestResponse
     */
    private function edit_user($id , $data) {
        return $this->json('PUT','api/v1/management/users/' . $id , $data);
    }

    /**
     * Unauthenticated users cannot edit users.
     *
     * @test
     */
    public function unauthenticated_users_cannot_edit_users() {
        $response = $this->edit_user(1,[]);
        $response->assertStatus(401);
    }

    /**
     * Unauthorized users cannot edit users.
     *
     * @test
     */
    public function unauthorized_users_cannot_edit_users() {
        $this->signIn(null,'api');
        $response = $this->edit_user(1, []);
        $response->assertStatus(403);
    }

    /**
     * Api edit users.
     *
     * @test
     */
    public function api_edit_users() {

        $user = $this->createUser();
        $this->signInAsUserManager('api');
        $faker = Factory::create();
        $response = $this->edit_user($user->id, [ 'email' => $faker->email , 'name' => $faker->name]);
        $response->assertStatus(200)
            ->assertJson([
                'updated' => true,
            ]);
    }

    /**
     * Api edit users check validation.
     *
     * @test
     */
    public function api_edit_users_check_validation() {

        $user = $this->createUser();
        $userAlreadyExisting = $this->createUser();

        $this->signInAsUserManager('api');

        //NAME
        $response = $this->edit_user($user->id, [ 'name' => '']);
        $this->assertResponseValidation($response,422,'name','The name field is required.');

        $response = $this->edit_user($user->id, [ 'name' => str_random(256)]);
        $this->assertResponseValidation($response,422,'name','The name may not be greater than 255 characters.');

        //EMAIL
        $response = $this->edit_user($user->id, [ 'email' => '']);
        $this->assertResponseValidation($response,422,'email','The email field is required.');

        $response = $this->edit_user($user->id, [ 'email' => 'prova']);
        $this->assertResponseValidation($response,422,'email','The email must be a valid email address.');

        $response = $this->edit_user($user->id, [ 'email' => $userAlreadyExisting->email]);
        $this->assertResponseValidation($response,422,'email','The email has already been taken.');

    }

    /**
     * Delete user.
     *
     * @param $id
     * @return \Illuminate\Foundation\Testing\TestResponse
     */
    private function delete_user($id) {
        return $this->json('DELETE','api/v1/management/users/' . $id);
    }

    /**
     * Unauthenticated users cannot delete users.
     *
     * @test
     */
    public function unauthenticated_users_cannot_delete_users() {
        $response = $this->delete_user(1);
        $response->assertStatus(401);
    }

    /**
     * Unauthorized users cannot delete users.
     *
     * @test
     */
    public function unauthorized_users_cannot_delete_users() {
        $this->signIn(null,'api');
        $response = $this->delete_user(1);
        $response->assertStatus(403);
    }

    /**
     * Api delete user.
     *
     * @test
     */
    public function api_delete_user()
    {
        $user = $this->createUser();

        $this->signInAsUserManager('api');

        $response = $this->delete_user($user->id);

        $response->assertStatus(200)
            ->assertJson([
                'deleted' => true,
            ]);

        $this->assertDatabaseMissing('users', [
            'id' => $user->id
        ]);

    }

    /**
     * ########## INVITATIONS
     */

    /**
     * Check app already have send-user-invitations permission.
     *
     * @test
     */
    public function check_app_already_have_send_user_invitations_permission()
    {
        $this->seedPermissions();
        $this->assertPermissionExists('send-user-invitations');
    }

    /**
     * Guest users cannot sent user invitations.
     *
     * @test
     */
    public function guest_users_cannot_sent_user_invitations()
    {
        $response = $this->post('/api/v1/management/users-invitations/send');

        $response->assertStatus(302);
    }

    /**
     * Users without authorization cant sent user invitations.
     *
     * @test
     */
    public function users_without_authorization_cant_sent_user_invitations()
    {
        $this->signIn(null,'api');
        config(['users.users_can_invite_other_users' => false]);
        $response = $this->post('/api/v1/management/users-invitations/send');
        $response->assertStatus(403);
        $response = $this->post('/api/v1/management/users-invitations');
        $response->assertStatus(403);
    }

    /**
     * Api check email validation with new user invitations.
     *
     * @test
     */
    public function api_check_email_validations_with_new_users_invitations()
    {
        $this->signInAsUserManager('api');
        $response = $this->post_user_invitation([ 'email' => '']);
        $this->assertResponseValidationEmail($response,422,'The email field is required.');

        $response = $this->post_user_invitation([ 'email' => 'invalidformat']);
        $this->assertResponseValidationEmail($response,422,'The email must be a valid email address.');

        $user = factory(User::class)->create();
        $response = $this->post_user_invitation([ 'email' => $user->email]);
        $this->assertResponseValidationEmail($response,422,'The email has already been taken.');

        // Already existing emails don't throw and error on inser because we want then to resend email
        $invitation = $this->createUserInvitations();
        $response = $this->post_user_invitation([ 'email' => $invitation->email]);
        $response->assertStatus(200);

        $response = $this->post_user_invitation(['email' => 'sdsfsdfsfdsdfe@dadddaasdasdaseqwerqwqqweqwqwewqeqweeqwsqweawedqweqweqweawerwaerwearwerw.com']);
        $this->assertResponseValidationEmail($response,422,'The email must be a valid email address.');
    }

    /**
     * Post user invitations.
     *
     * @param $data
     * @return \Illuminate\Foundation\Testing\TestResponse
     */
    private function post_user_invitation($data){
        return $this->json('POST','/api/v1/management/users-invitations/send', $data);
    }

    /**
     * Assert Response validation email.
     */
    private function assertResponseValidationEmail($response, $statusCode, $email){
        $response->assertStatus($statusCode)->assertExactJson([
            'email' => [
                0 => $email
            ]
        ]);
    }

    /**
     * Api creates a new invitation.
     *
     * @test
     */
    public function api_creates_a_new_invitation()
    {
        $this->signInAsUserManager('api');
        $faker = Factory::create();

        $response = $this->post_user_invitation(['email' => $email = $faker->email]);

        $response->assertStatus(200)
            ->assertJson([
                'created' => true,
            ]);

        $this->assertDatabaseHas('user_invitations', [
            'email' => $email,
            'state' => 'pending'
        ]);
    }

    /**
     * Mail is sent when api creates a new user invitation.
     *
     * @test
     */
    public function mail_is_sent_when_api_creates_a_new_user_invitation()
    {
        $this->signInAsUserManager('api');

        $faker = Factory::create();
        Mail::fake();

        $response = $this->post_user_invitation(['email' => $email = $faker->email]);

        Mail::assertSent(UserInvitation::class, function ($mail) use ($email) {
            return $mail->invitation->email = $email &&
                $mail->hasTo($email);
            $mail->hasFrom(config('mail.from')['address']);
        });
    }


    /**
     * userInvited events is fired when api creates a new invitation.
     *
     * @test
     */
    public function user_invited_event_is_fired_when_api_creates_a_new_invitation()
    {
        $this->signInAsUserManager('api');
        $faker = Factory::create();

        Event::fake();
        //So forced to indicate initial state and token
        $response = $this->post_user_invitation([
            'email' => $email = $faker->email,
            'state' => 'pending',
            'token' => hash_hmac('sha256', str_random(40), env('APP_KEY'))
        ]);
        Event::assertDispatched(UserInvited::class, function ($e) use ($email) {
            return $e->invitation->email === $email && $e->invitation->state === 'pending';
        });
    }

    /**
     * Guest users cannot see user invitations.
     *
     * @test
     */
    public function guest_users_cannot_see_user_invitations()
    {
        $response = $this->json('GET','/api/v1/management/users-invitations');
        $response->assertStatus(401);
    }

    /**
     * Users without authorization cannot see user invitations.
     *
     * @test
     */
    public function users_without_authorization_cannot_see_user_invitations()
    {
        $this->signIn(null,'api');
        $response = $this->json('GET','/api/v1/management/users-invitations');
        $response->assertStatus(403);
    }

    /**
     * Delete user invitation.
     *
     * @param $id
     * @return \Illuminate\Foundation\Testing\TestResponse
     */
    private function delete_user_invitation($id) {
        return $this->json('DELETE','api/v1/management/users-invitations/' . $id);
    }

    /**
     * Unauthenticated users cannot delete user invitations.
     *
     * @test
     */
    public function unauthenticated_users_cannot_delete_user_invitations() {
        $response = $this->delete_user_invitation(1);
        $response->assertStatus(401);
    }

    /**
     * Unauthorized users cannot delete user invitations.
     *
     * @test
     */
    public function unauthorized_users_cannot_delete_user_invitations() {
        $this->signIn(null,'api');
        $response = $this->delete_user_invitation(1);
        $response->assertStatus(403);
    }

    /**
     * Api deletes user invitations.
     *
     * @test
     */
    public function api_deletes_user_invitations() {

        $invitation = $this->createUserInvitations();

        $this->signInAsUserManager('api');

        $response = $this->delete_user_invitation($invitation->id);

        $response->assertStatus(200)
            ->assertJson([
                'deleted' => true,
            ]);

        $this->assertDatabaseMissing('user_invitations', [
            'id' => $invitation->id
        ]);
    }

    /**
     * Show user invitation.
     *
     * @param $id
     * @return \Illuminate\Foundation\Testing\TestResponse
     */
    private function show_user_invitation($id) {
        return $this->json('GET','api/v1/management/users-invitations/' . $id);
    }

    /**
     * Unauthenticated users cannot show user invitations.
     *
     * @test
     */
    public function unauthenticated_users_cannot_show_user_invitations() {
        $response = $this->show_user_invitation(1);
        $response->assertStatus(401);
    }

    /**
     * Unauthorized users cannot show user invitations.
     *
     * @test
     */
    public function unauthorized_users_cannot_show_user_invitations() {
        $this->signIn(null,'api');
        $response = $this->show_user_invitation(1);
        $response->assertStatus(403);
    }

    /**
     * Api show user invitation.
     *
     * @test
     */
    public function api_show_user_invitation()
    {
        $invitation = $this->createUserInvitations();
        $this->signInAsUserManager('api');
        $response = $this->show_user_invitation($invitation->id);
        $response->assertStatus(200)
            ->assertJson([
                'id'=> $invitation->id,
                'email' => $invitation->email,
                'state' => $invitation->state,
                'created_at' => $invitation->created_at->toDateTimeString(),
                'updated_at' => $invitation->updated_at->toDateTimeString()
            ]);
    }

    /**
     * Edit user invitation.
     *
     * @param $id
     * @param array $data
     * @return \Illuminate\Foundation\Testing\TestResponse
     */
    private function edit_user_invitation($id , $data) {
        return $this->json('PUT','api/v1/management/users-invitations/' . $id , $data);
    }

    /**
     * Unauthenticated users cannot edit user invitations.
     *
     * @test
     */
    public function unauthenticated_users_cannot_edit_user_invitations() {
        $response = $this->edit_user_invitation(1,[]);
        $response->assertStatus(401);
    }

    /**
     * Unauthorized users cannot edit user invitations.
     *
     * @test
     */
    public function unauthorized_users_cannot_edit_user_invitations() {
        $this->signIn(null,'api');
        $response = $this->edit_user_invitation(1, []);
        $response->assertStatus(403);
    }

    /**
     * Api edit user invitations.
     *
     * @test
     */
    public function api_edit_user_invitations() {

        $invitation = $this->createUserInvitations();

        $this->signInAsUserManager('api');
        $faker = Factory::create();
        $response = $this->edit_user_invitation($invitation->id, [ 'email' => $faker->email , 'state' => 'accepted']);
        $response->assertStatus(200)
            ->assertJson([
                'updated' => true,
            ]);
    }

    /**
     * Api edit user invitations check validation.
     *
     * @test
     */
    public function api_edit_user_invitations_check_validation() {

        $invitation = $this->createUserInvitations();

        $this->signInAsUserManager('api');
        $user = $this->createUser();

        //EMAIL
        $response = $this->edit_user_invitation($invitation->id, [ 'email' => '']);
        $this->assertResponseValidation($response,422,'email','The email field is required.');

        $response = $this->edit_user_invitation($invitation->id, [ 'email' => 'prova']);
        $this->assertResponseValidation($response,422,'email','The email must be a valid email address.');

        $response = $this->edit_user_invitation($invitation->id, [ 'email' => $user->email]);
        $this->assertResponseValidation($response,422,'email','The email has already been taken.');

        //STATE
        $response = $this->edit_user_invitation($invitation->id, [ 'state' => '']);
        $this->assertResponseValidation($response,422,'state','The state field is required.');

        $response = $this->edit_user_invitation($invitation->id, [ 'state' => 'invalidstate']);
        $this->assertResponseValidation($response,422,'state','The selected state is invalid.');

    }

    /**
     * Check accept user invitation returns 404 without correct token
     *
     * @test
     */
    public function check_accept_user_invitation_returns_404_without_correct_token() {
        $response = $this->get('/management/users/user-invitation-accept');
        $response->assertStatus(404);
        $response = $this->get('/management/users/user-invitation-accept?token=988213adsads');
        $response->assertStatus(404);
        $invitation = $this->createUserInvitations();
        $user = $this->createUser();
        $invitation->user()->associate($user);
        $invitation->accept();
        $response = $this->get('/management/users/user-invitation-accept?token=' . $invitation->token);
        $response->assertStatus(404);
    }

    /**
     * Check accept user invitation is public with correct_token.
     *
     * @test
     */
    public function check_accept_user_invitation_is_public() {
        $invitation = $this->createUserInvitations();
        $response = $this->get('/management/users/user-invitation-accept?token=' . $invitation->token);
        $response->assertStatus(200);
    }

    /**
     * Check create user via invitation.
     *
     * @test
     */
    public function check_create_user_via_invitation()
    {
        $invitation = $this->createUserInvitations();
        $faker = Factory::create();
        $this->json('POST', '/api/v1/management/user-invitations-accept',[
            'name' => $name = $faker->name,
            'token' => $invitation->token,
            'email' => $invitation->email,
            'password' => bcrypt($faker->password)
        ])->assertStatus(200)
        ->assertJson([
            'created' => true
        ]);

        $this->assertDatabaseHas('users', [
            'name' => $name,
            'email' => $invitation->email,
        ]);

        $user = User::where('name' , $name)->where('email', $invitation->email)->first();
        $this->assertDatabaseHas('user_invitations', [
            'id' => $invitation->id,
            'email' => $invitation->email,
            'state' => 'accepted',
            'user_id' => $user->id
        ]);
    }

    /**
     * Check create user via invitation validation errors.
     *
     * @test
     */
    public function check_create_user_via_invitation_validation_errors()
    {
        $this->json('POST', '/api/v1/management/user-invitations-accept',[])->assertStatus(422)
            ->assertJson(
                [
                    'name' => ['The name field is required.'],
                    'email' => ['The email field is required.'],
                    'password' => ['The password field is required.'],
                    'token' => ['The token field is required.']
                ]
            );

        $this->json('POST', '/api/v1/management/user-invitations-accept',[
            'name' => str_random(256)
        ])->assertStatus(422)
            ->assertJson(
                [
                    'name' => ['The name may not be greater than 255 characters.'],
                    'email' => ['The email field is required.'],
                    'password' => ['The password field is required.'],
                    'token' => ['The token field is required.']
                ]
            );

        $this->json('POST', '/api/v1/management/user-invitations-accept',[
            'email' => 'incorrect_email'
        ])->assertStatus(422)
            ->assertJson(
                [
                    'name' => ['The name field is required.'],
                    'email' => ['The email must be a valid email address.'],
                    'password' => ['The password field is required.'],
                    'token' => ['The token field is required.']
                ]
            );

        $user = $this->createUser();
        $this->json('POST', '/api/v1/management/user-invitations-accept',[
            'email' => $user->email
        ])->assertStatus(422)
            ->assertJson(
                [
                    'name' => ['The name field is required.'],
                    'email' => ['The email has already been taken.'],
                    'password' => ['The password field is required.'],
                    'token' => ['The token field is required.']
                ]
            );

        $this->json('POST', '/api/v1/management/user-invitations-accept',[
            'password' => '1234'
        ])->assertStatus(422)
            ->assertJson(
                [
                    'name' => ['The name field is required.'],
                    'email' => ['The email field is required.'],
                    'password' => ['The password must be at least 6 characters.'],
                    'token' => ['The token field is required.']
                ]
            );
    }

    /**
     * Create user.
     *
     * @param null $num
     * @return mixed
     */
    private function createUser($num = null) {
        return factory(User::class,$num)->create();
    }

    /**
     * Create user invitations.
     *
     * @param null $num
     * @return mixed
     */
    private function createUserInvitations($num = null) {
        return factory(UserInvitationModel::class,$num)->create();
    }

    /**
     * Api list user invitations
     *
     * @test
     */
    public function api_list_user_invitations()
    {
        $this->publishFactories();
        $this->createUserInvitations(10);
        $this->signInAsUserManager('api');
        $response = $this->json('GET','/api/v1/management/users-invitations');
        $response->assertStatus(200)
            ->assertJsonStructure(['data' => [
            '*' => [
                'id', 'email', 'state','token','user_id','created_at','updated_at'
            ]
        ]]);
    }

    /**
     * Public user invitations are shown depending on config.
     *
     * @test
     */
    public function public_user_invitations_are_shown_depending_on_config()
    {
        config(['users.users_can_invite_other_users' => false]);
        $response = $this->get('/invite/user');
        $response->assertStatus(404);

        config(['users.users_can_invite_other_users' => true]);
        $response = $this->get('/invite/user');
        $response->assertStatus(200);
    }


    //**********************************************
    //*    TRACKING USERS AND USER INVITATIONS     *
    //**********************************************

    /**
     * Revisionable is enable in users.
     *
     *
     * @test
     */
    public function revisionable_is_enabled_in_users()
    {
        $user = $this->createUser();
        $this->assertDatabaseHas('revisions', [
            'revisionable_type' => 'App\User',
            'revisionable_id' => $user->id,
            'user_id' => null,
            'key' => 'created_at',
        ]);
    }

    /**
     * Revisionable is enabled in users creation by API.
     *
     *
     * @test
     */
    public function revisionable_is_enable_in_users_creation_by_api()
    {
        $faker = Factory::create();
        $this->signInAsUserManager('api');
        $response = $this->post_user_creation($name = $faker->name,
            $email = $faker->unique()->safeEmail, 'secret');
        $response->assertStatus(200);
        $user = User::where(['email' => $email])->first();
        $this->assertDatabaseHas('revisions', [
            'revisionable_type' => 'App\User',
            'revisionable_id' => $user->id,
            'user_id' => Auth::user()->id,
            'key' => 'created_at',
        ]);
    }

    /**
     * Revisionable is enabled in user invitations.
     *
     * @test
     */
    public function revisionable_is_enabled_in_user_invitations()
    {
        $invitation = $this->createUserInvitations();
        $this->assertDatabaseHas('revisions', [
            'revisionable_type' => 'Acacha\Users\Models\UserInvitation',
            'revisionable_id' => $invitation->id,
            'user_id' => null,
            'key' => 'created_at'
        ]);
    }

    /**
     * Revisionable is enabled in user invitations creation by API.
     *
     * @test
     */
    public function revisionable_is_enable_in_user_invitations_creation_by_api()
    {
        $faker = Factory::create();
        $this->signInAsUserManager('api');
        $response = $this->post_user_invitation([ 'email' => $email = $faker->unique()->safeEmail ] );
        $response->assertStatus(200);
        $invitation = UserInvitationModel::where(['email' => $email])->first();
        $this->assertDatabaseHas('revisions', [
            'revisionable_type' => 'Acacha\Users\Models\UserInvitation',
            'revisionable_id' => $invitation->id,
            'user_id' => Auth::user()->id,
            'key' => 'created_at',
        ]);
    }

    //***************************
    //*    USERS DASHBOARD      *
    //***************************

    /**
     * Unprivileged users don't see Dashboard.
     *
     * @test
     */
    public function unprivileged_users_dont_see_dashboard()
    {
        $response = $this->get('/management/users/dashboard');
        $response->assertStatus(302);
        $response->assertRedirect('/login');

        $this->signIn();
        $response = $this->get('/management/users/dashboard');
        $response->assertStatus(403);
    }

    /**
     * Check total users.
     *
     * @test
     */
    public function check_totalUsers()
    {
        $this->createUser(50);
        $this->signInAsUserManager('api')
            ->json('GET', '/api/v1/management/users-dashboard/totalUsers')
            ->assertStatus(200)
            ->assertSeeText('51');
    }

    /**
     * Unprivileged users don't see user tracking.
     *
     * @test
     */
    public function unprivileged_users_dont_see_user_tracking()
    {
        $response = $this->get('/management/users/tracking');
        $response->assertStatus(302);
        $response->assertRedirect('/login');

        $this->signIn();
        $response = $this->get('/management/users/tracking');
        $response->assertStatus(403);
    }

    /**
     * Unprivileged users don't see user tracking_api.
     *
     * @test
     */
    public function unprivileged_users_dont_see_user_tracking_api()
    {
        $response = $this->json('GET', '/api/v1/revisionable/model/tracking');
        $response->assertStatus(401);

        $this->signIn(null,'api');
        $response = $this->json('GET','/api/v1/revisionable/model/tracking?model=User');
        $response->assertStatus(403);

    }

    /**
     * Test user tracking api.
     *
     * @group caca10
     * @test
     */
    public function user_tracking()
    {
        $this->signInAsUserManager('api');
        $response = $this->json('GET','/api/v1/revisionable/model/tracking?model=\App\User');
        $response->assertStatus(200);
        $response->assertJson([]);

        //TODO
        $response->dump();
//        $response->assertJson([]);
//        $response->assertJsonStructure([ 'type',
//          [ type: 'time-label', time: '11 Feb. 2014'],
//          [ header: 'The user A USERNAME (id) has been created by USERNAME(id)' , time: '5 mins ago', icon: 'fa-user', iconBackground: 'bg-green' ],
//          [ header: 'The user USERNAME (id) has been deleted by USERNAME(id)' , time: '12:04', icon: 'fa-user', iconBackground: 'bg-red'],
//          [ type: 'time-label', time: '10 Feb. 2014'],
//          [ header: 'The user USERNAME (id) has been deleted by USERNAME(id)' , time: '12:04', icon: 'fa-user', iconBackground: 'bg-red'],
//          [ header: 'The user USERNAME (id) changed FIELDNAME of User from OLDVALUE to NEWVALUE' , time: '12:03', icon: 'fa-user', iconBackground: 'bg-yellow'],
//          [ header: 'The user USERNAME (id) has been soft deleted by USERNAME(id)' , time: '12:02', icon: 'fa-user', iconBackground: 'bg-red'],
//          [ header: 'Prova' , time: '12:05', icon: 'fa-comments', iconBackground: 'bg-yellow' ],
//          [ header: 'sad ads asd asd asd ' , time: '1:05', iconBackground: 'bg-blue'],
//          [ header: 'Nothing' , time: '1:03'],
//          [ type: 'time-label', time: '09 Feb. 2014'],
//          [ header: 'Header ', body: 'Here is and HTML header <b/>Negreta</b>' , time: '1:05', iconBackground: 'bg-blue'],
//          [ header: 'Header with <b/>HTML</b> ', icon: 'fa-comments', body: 'Here is and HTML header <b/>Negreta</b>', footer: 'Footer que tal!' , time: '1:05', iconBackground: 'bg-blue'],
//          [ header: 'Header ', body: 'Here is and HTML header <b/>Negreta</b>', footer: 'Footer with <b/>HTML</b>!' , time: '1:05', iconBackground: 'bg-blue', noBorder: true],
//          [ header: 'Buttons on footer', body: 'Here is and HTML header <b/>Negreta</b>', footer: '<a class="btn btn-primary btn-xs">Read more</a> <a class="btn btn-danger btn-xs">Other</a>' , time: '1:05', iconBackground: 'bg-blue', noBorder: true]
//        ]
//        );

//        ->seeJsonStructure([
//        'name',
//        'pet' => [
//            'name', 'age'
//        ]
//    ]);

//        [
//          { type: 'time-label', time: '11 Feb. 2014'},
//          { header: 'The user A USERNAME (id) has been created by USERNAME(id)' , time: '5 mins ago', icon: 'fa-user', iconBackground: 'bg-green' },
//          { header: 'The user USERNAME (id) has been deleted by USERNAME(id)' , time: '12:04', icon: 'fa-user', iconBackground: 'bg-red'},
//          { type: 'time-label', time: '10 Feb. 2014'},
//          { header: 'The user USERNAME (id) has been deleted by USERNAME(id)' , time: '12:04', icon: 'fa-user', iconBackground: 'bg-red'},
//          { header: 'The user USERNAME (id) changed FIELDNAME of User from OLDVALUE to NEWVALUE' , time: '12:03', icon: 'fa-user', iconBackground: 'bg-yellow'},
//          { header: 'The user USERNAME (id) has been soft deleted by USERNAME(id)' , time: '12:02', icon: 'fa-user', iconBackground: 'bg-red'},
//          { header: 'Prova' , time: '12:05', icon: 'fa-comments', iconBackground: 'bg-yellow' },
//          { header: 'sad ads asd asd asd ' , time: '1:05', iconBackground: 'bg-blue'},
//          { header: 'Nothing' , time: '1:03'},
//          { type: 'time-label', time: '09 Feb. 2014'},
//          { header: 'Header ', body: 'Here is and HTML header <b/>Negreta</b>' , time: '1:05', iconBackground: 'bg-blue'},
//          { header: 'Header with <b/>HTML</b> ', icon: 'fa-comments', body: 'Here is and HTML header <b/>Negreta</b>', footer: 'Footer que tal!' , time: '1:05', iconBackground: 'bg-blue'},
//          { header: 'Header ', body: 'Here is and HTML header <b/>Negreta</b>', footer: 'Footer with <b/>HTML</b>!' , time: '1:05', iconBackground: 'bg-blue', noBorder: true},
//          { header: 'Buttons on footer', body: 'Here is and HTML header <b/>Negreta</b>', footer: '<a class="btn btn-primary btn-xs">Read more</a> <a class="btn btn-danger btn-xs">Other</a>' , time: '1:05', iconBackground: 'bg-blue', noBorder: true}
//        ]
//      }
    }

    /**
     * Test user tracking api.
     *
     * @test
     */
    public function user_tracking_validation()
    {
        $this->signInAsUserManager('api');
        $response = $this->json('GET','/api/v1/revisionable/model/tracking');
        $this->assertResponseValidation($response,422,'model','The model field is required.');

    }

    //***************************
    //*    USER PROFILE         *
    //***************************

    /**
     * Test user profile is no public.
     *
     * @test
     */
    public function user_profile_is_not_public()
    {
        $response = $this->get('/user/profile');
        $response->assertStatus(302);
        $response->assertRedirect('/login');
    }

    /**
     * Test user can see is own profile.
     *
     * @test
     */
    public function user_can_see_is_own_profile()
    {
        $this->signIn();
        $response = $this->get('/user/profile');
        $response->assertStatus(200);
        $response->assertSeeText(Auth::user()->name);
        $response->assertSeeText(Auth::user()->email);
    }

    /**
     * Test a 404 is thrown when user profile of unexisting user is asked.
     *
     * @test
     */
    public function thrown_when_user_profile_of_unexisting_user_is_asked()
    {
        $this->signIn();
        $response = $this->get('/user/profile/99999999999999999999999999999999999999999');
        $response->assertStatus(404);;
    }

    /**
     * Test user cannot see others profile.
     *
     * @test
     */
    public function user_cannot_see_others_profile()
    {
        $user = $this->createUser();
        $this->signIn();
        $response = $this->get('/user/profile/' . $user->id);
        $response->assertStatus(403);
    }

    /**
     * Test privileged user can see others profile.
     *
     * @test
     */
    public function privileged_user_can_see_others_profile()
    {
        $user = $this->createUser();
        $this->signInAsUserManager();
        $response = $this->get('/user/profile/' . $user->id);
        $response->assertStatus(200);
    }

    //***************************
    //*    HELPER FUNCTIONS     *
    //***************************

    /**
     * Assert role exists in database.
     *
     * @param $permission
     */
    private function assertPermissionExists($permission)
    {
        $this->assertInstanceOf(Permission::class, $p = Permission::findByName($permission));
        $this->assertEquals($permission , $p->name);
        $this->assertDatabaseHas('permissions', [
            'name' => $permission
        ]);
    }

    /**
     * Assert assertRoleExists exists in database.
     *
     * @param $role
     */
    private function assertRoleExists($role)
    {
        $this->assertInstanceOf(Role::class, $p = Role::findByName($role));
        $this->assertEquals($role , $p->name);
        $this->assertDatabaseHas('roles', [
            'name' => $role
        ]);
    }

    /**
     * Seed permissions.
     */
    private function publishFactories()
    {
        //Publish factories
        $this->artisan('vendor:publish', ['--provider' => 'Acacha\Users\Providers\UsersManagementServiceProvider', '--tag' => 'acacha_users_factories']);
    }

    /**
     * Seed permissions.
     */
    private function seedPermissions()
    {
        //Publish seed
        $this->artisan('vendor:publish', ['--provider' => 'Acacha\Users\Providers\UsersManagementServiceProvider', '--tag' => 'acacha_users_seeds']);
        //Execute seed
        $this->artisan('db:seed',['--class' => 'CreateUsersManagementPermissions']);
    }
}
