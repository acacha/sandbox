<?php

namespace Tests\Browser;

use Acacha\Users\Models\UserInvitation;
use App\User;
use Faker\Factory;
use Tests\Traits\CanLogin;
use Tests\Traits\InteractsWithUsers;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Illuminate\Foundation\Testing\DatabaseMigrations;

/**
 * Class UsersManagementTest.
 *
 * @package Tests\Browser
 */
class UsersManagementTest extends DuskTestCase
{
    use DatabaseMigrations, InteractsWithUsers, CanLogin;

    /**
     * Authorized users see users management menu entry.
     *
     * @test
     * @return void
     */
    public function authorized_users_see_users_managment_menu_entry()
    {
        dump(__FUNCTION__ );
        $manager = $this->createUserManagerUser();

        $this->browse(function (Browser $browser) use ($manager) {
            $this->login($browser,$manager)
                ->visit('/management/users')
                ->assertTitleContains('Users Management')
                ->assertSeeLink('Users');
        });

        $this->logout();
    }

    /**
     * Unauthorized users see users management menu entry.
     *
     * @test
     * @return void
     */
    public function unauthorized_users_dont_see_users_managment_menu_entry()
    {
        dump(__FUNCTION__ );

        $user = $this->createUsers();
        $this->browse(function (Browser $browser) use ($user){
            $this->login($browser,$user)
                ->visit('/home')
                ->assertDontSeeLink('Users');
        });

        $this->logout();
    }

    /**
     * Authorized users see users management menu entry.
     *
     * @test
     * @return void
     */
    public function check_users_are_shown_correctly()
    {
        dump(__FUNCTION__ );
        $manager = $this->createUserManagerUser();
        $this->createUsers(75);
        $this->browse(function (Browser $browser) use ($manager) {
            $this->login($browser,$manager)
                ->visit('/management/users')
                ->assertSeeIn('div#users-list-box div.box-header div.box-title', 'Users List')
                ->assertVisible('div#users-list-filter-bar')
                //See pagination
                ->driver->executeScript('document.getElementById("users-list-vuetable-pagination").scrollIntoView();');
            $browser->assertVisible('div#users-list-vuetable-pagination')
                //See pagination info
                ->assertVisible('div#users-list-vuetable-pagination div.vuetable-pagination-info')
                ->assertSeeIn('div#users-list-box div.box-body div#users-list-vuetable-pagination div.vuetable-pagination-info', 'Displaying 1 to 15 of 76 users')
                //See paginator
                ->assertVisible('div#users-list-vuetable-pagination div.pagination');
            //Check number of columns/fields
            $this->assertEquals(8, count($browser->elements('div#users-list-box div.box-body table.vuetable thead tr th')));
            //Check number of rows/users
            $this->assertEquals(15, count($browser->elements('tr.um-user-row')));
        });

        $this->logout();
    }

    // ******************************
    // * Users Tests                *
    // ******************************

    /**
     * Create user.
     *
     * @test
     */
    public function create_user()
    {
        dump(__FUNCTION__ );
        $manager = $this->createUserManagerUser();
        $this->browse(function ($browser) use ($manager) {
            $newUser = $this->fill_create_user_form($browser, $manager);

            $browser->waitFor('div#create-user-result');
            $browser->assertSeeIn('#create-user-result', 'User created!');
            $this->assertEquals($browser->value('#inputCreateUserName'),'');
            $this->assertEquals($browser->value('#inputCreateUserEmail'),'');
            $this->assertEquals($browser->value('#inputCreateUserPassword'),'');

            $this->assertDatabaseHas('users', [
                'name' => $newUser->name,
                'email' => $newUser->email
            ]);

            //Assert list has been reloaded
            $browser->driver->executeScript('document.getElementById("user-list").scrollIntoView();');
            $browser->assertSeeIn('div#user-list',$newUser->email);
            $browser->assertSeeIn('div#user-list',$newUser->name);
        });
    }

    /**
     * Create user validation.
     *
     * @test
     */
    public function create_user_validation()
    {
        dump(__FUNCTION__ );

        $manager = $this->createUserManagerUser();
        $faker = Factory::create();
        $this->browse(function ($browser) use ($manager,$faker) {
//            $browser->pause(500000);
            $this->fill_create_user_form($browser, $manager, '',$faker->email,$faker->password);
            $this->assertSeeValidationError($browser,'span#errorForInputCreateUserName',
                'The name field is required.');

            $this->fill_create_user_form($browser, $manager, str_random(256),$faker->email,$faker->password);
            $this->assertSeeValidationError($browser,'span#errorForInputCreateUserName',
                'The name may not be greater than 255 characters.');

            $this->fill_create_user_form($browser, $manager, $faker->name,'',$faker->password);
            $this->assertSeeValidationError($browser,'span#errorForInputCreateUserEmail',
                'The email field is required.');

            $this->fill_create_user_form($browser, $manager, $faker->name,'dsasaddsa@dsasda',$faker->password);
            $this->assertSeeValidationError($browser,'span#errorForInputCreateUserEmail',
                'The email must be a valid email address.');

            $this->fill_create_user_form($browser, $manager, $faker->name, $faker->email,'');
            $this->assertSeeValidationError($browser,'span#errorForInputCreateUserPassword',
                'The password field is required.');

            $this->fill_create_user_form($browser, $manager, $faker->name, $faker->email,str_random(5));
            $this->assertSeeValidationError($browser,'span#errorForInputCreateUserPassword',
                'The password must be at least 6 characters.');
        });
    }

    /**
     * Show user.
     *
     * @test
     */
    public function show_user()
    {
        dump(__FUNCTION__ );
        $user = $this->createUsers();
        $this->activeUserDetailRowAndExecuteAction($user,'show');
    }

    /**
     * Modify user.
     *
     * @test
     */
    public function modify_user()
    {
        dump(__FUNCTION__ );
        $user = $this->createUsers();
        $this->activeUserDetailRowAndExecuteAction($user,'edit');
    }

    /**
     * Modify user check validation.
     *
     * @test
     */
    public function modify_user_check_validation()
    {
        dump(__FUNCTION__ );
        $user = $this->createUsers();

        $manager = $this->createUserManagerUser();
        $this->browse(function ($browser) use ($manager,$user) {

            $this->login($browser,$manager);
            $browser->visit('/management/users')
                ->assertMissing('#user-' . $user->id . '-detail-row')
                ->press('#edit-user-' . $user->id)
                ->assertVisible('#user-' . $user->id . '-detail-row')
                ->assertVisible('#editable-field-user-' . $user->id . '-name' )
                ->assertVisible('#editable-field-user-' . $user->id . '-email');

            $browser->assertVisible('#editable-field-user-' . $user->id . '-name div.input-group')
                ->assertMissing('#editable-field-user-' . $user->id . '-name label i.fa-edit')
                ->assertVisible('#editable-field-user-' . $user->id . '-email div.input-group')
                ->assertMissing('#editable-field-user-' . $user->id . '-email label i.fa-edit');

            //NAME
            $browser->type('#input-edit-user-' . $user->id . '-field-name' , '');
            $browser->pause(1000);
            $browser->press('#edit-button-user-' . $user->id . '-field-name');
            $this->assertSeeValidationError($browser,'span#errorForInput-user-' . $user->id . '-field-name',
                'The name field is required.');

            $browser->type('#input-edit-user-' . $user->id . '-field-name' , str_random(256));
            $browser->pause(1000);
            $browser->press('#edit-button-user-' . $user->id . '-field-name');
            $this->assertSeeValidationError($browser,'span#errorForInput-user-' . $user->id . '-field-name',
                'The name may not be greater than 255 characters.');

            //EMAIL
            $browser->type('#input-edit-user-' . $user->id . '-field-email' , '');
            $browser->pause(1000);
            $browser->press('#edit-button-user-' . $user->id . '-field-email');
            $this->assertSeeValidationError($browser,'span#errorForInput-user-' . $user->id . '-field-email',
                'The email field is required.');

            $browser->type('#input-edit-user-' . $user->id . '-field-email' , 'invalidemail');
            $browser->pause(1000);
            $browser->press('#edit-button-user-' . $user->id . '-field-email');
            $this->assertSeeValidationError($browser,'span#errorForInput-user-' . $user->id . '-field-email',
                'The email must be a valid email address.');

            $existingUser = $this->createUsers();
            $browser->type('#input-edit-user-' . $user->id . '-field-email' , $existingUser->email);
            $browser->pause(1000);
            $browser->press('#edit-button-user-' . $user->id . '-field-email');
            $this->assertSeeValidationError($browser,'span#errorForInput-user-' . $user->id . '-field-email',
                'The email has already been taken.');

        });
    }

    /**
     * Delete user.
     *
     * @test
     */
    public function delete_user()
    {
        dump(__FUNCTION__ );
        $user = $this->execute_delete_user();

        $this->assertDatabaseMissing('users', [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email
        ]);
    }

    /**
     * Delete user cancel.
     *
     * @test
     */
    public function delete_user_cancel()
    {
        dump(__FUNCTION__ );
        $user = $this->execute_delete_user(false);

        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email
        ]);
    }

    /**
     * Unauthorized users see users list action buttons disabled.
     *
     * @test
     */
    public function unauthorized_users_see_users_list_action_buttons_disabled()
    {
        dump(__FUNCTION__ );

        $user = $this->createUserWithOnlySeePermissions();

        $this->browse(function ($browser) use ($user) {
            $this->login($browser, $user);
            $browser->visit('/management/users?expand')
                ->assertVisible('[id^=delete-user-]:disabled')
                ->assertVisible('[id^=edit-user-]:disabled')
                ->assertVisible('[id^=show-user-]:disabled')
                ->assertVisible('[id^=reset-user-password-]:disabled')
                ->assertVisible('[id^=open-user-profile]:disabled');
        });
    }

    /**
     * Users lists action "show profile" works.
     *
     * @test
     */
    public function users_list_action_show_profile_works()
    {
        dump(__FUNCTION__ );

        $manager = $this->createUserManagerUser();
        $user = $this->createUsers();
        $this->browse(function ($browser) use ($manager, $user) {
            $this->login($browser,$manager);
            $browser->visit('/management/users?expand')
                ->driver->executeScript('document.getElementById("users-list-box").scrollIntoView();');
            $browser->press('button#open-user-profile-' . $user->id)
                ->pause(1000)
                ->assertSee($user->name)
                ->assertSee($user->email);
        });
    }

    /**
     * Users lists action "send reset password" works.
     *
     * @test
     */
    public function users_list_action_send_reset_password_works()
    {
        dump(__FUNCTION__ );

        $manager = $this->createUserManagerUser();
        $user = $this->createUsers();
        $this->browse(function ($browser) use ($manager, $user) {
            $this->login($browser,$manager);
            $browser->visit('/management/users?expand')
                ->driver->executeScript('document.getElementById("users-list-box").scrollIntoView();');
            $browser->press('button#reset-user-password-' . $user->id)
                ->waitFor('div#users-list-confirm-modal');
        });
    }

    /**
     * Test massive send reset password works.
     * @group failing
     * @test
     */
    public function test_massive_send_reset_password_works()
    {
        dump(__FUNCTION__ );

        $manager = $this->createUserManagerUser();
        $users = $this->createUsers(3);
        $this->browse(function ($browser) use ($manager, $users) {
            $this->login($browser,$manager);
            $browser->visit('/management/users?expand')
                ->driver->executeScript('document.getElementById("users-list-box").scrollIntoView();');
            $browser->check("div#user-list input[type='checkbox']:first-child");
            $browser->uncheck("div#user-list tbody.vuetable-body input[type='checkbox']:first-child")
                ->press('button#massive-send-reset-passwords')
                ->waitFor('div#users-list-confirm-modal')
                ->assertSeeIn('div#users-list-confirm-modal','Are you sure you want to send an email to multiple users?');

            $browser->press('Send');

            $browser->waitFor('div#users-list-result')
                ->assertSeeIn('div#users-list-result','Password reset email sent to user all the selected users.');
        });
    }

    /**
     * Test massive delete action.
     *
     * @test
     */
    public function test_massive_delete_action()
    {
        dump(__FUNCTION__ );

        $manager = $this->createUserManagerUser();
        $users = $this->createUsers(3);
        $this->browse(function ($browser) use ($manager, $users) {
            $this->login($browser,$manager);
            $browser->visit('/management/users?expand')
                ->driver->executeScript('document.getElementById("users-list-box").scrollIntoView();');
            $browser->check("div#user-list input[type='checkbox']:first-child");
            $browser->uncheck("div#user-list tbody.vuetable-body input[type='checkbox']:first-child")
            ->press('button#massive-remove-users')
            ->waitFor('div#users-list-confirm-modal')
            ->assertSeeIn('div#users-list-confirm-modal','Are you sure you want to delete multiple users?');

            $browser->press('Delete');
            foreach ($users as $user) {
                $browser->waitUntilMissing('#delete-user-' . $user->id);
            }

            $browser->waitFor('div#users-list-result')
                ->assertSeeIn('div#users-list-result','Selected users removed.');
        });
    }

    /**
     * ----------------------------------------
     * Private/helper test functions for users.
     * ----------------------------------------
     */

    /**
     * Fill create user form.
     *
     * @param $browser
     * @param $manager
     * @param null $name
     * @param null $email
     * @param null $password
     * @return User
     */
    private function fill_create_user_form($browser, $manager, $name = null, $email = null, $password = null)
    {
        $this->login($browser,$manager);
        $faker = Factory::create();
        $browser->visit('/management/users?expand')
            ->assertMissing('#create-user-result')
            ->type("form#create-user-form input[name='name']", $name = ($name === null) ? $faker->name : $name)
            ->type("form#create-user-form input[name='email']", $email = ($email === null) ? $faker->email : $email)
            ->type("form#create-user-form input[name='password']",
                $password = ($password === null) ? $faker->password : $password)
            ->press('Create');

        return new User(['name' => $name, 'email' => $email, 'password' => $password]);
    }

    /**
     * Assert see validation error.
     *
     * @param $browser
     * @param $selector
     * @param $value
     */
    private function assertSeeValidationError($browser, $selector, $value)
    {
        $browser->waitFor($selector);
        $browser->assertSeeIn($selector, $value);
    }

    /**
     * Active user detail row.
     *
     * @param $user
     * @param $action
     */
    private function activeUserDetailRowAndExecuteAction($user,$action)
    {
        $manager = $this->createUserManagerUser();
        $this->browse(function ($browser) use ($manager,$user, $action) {

            $this->login($browser,$manager);
            $browser->visit('/management/users')
                ->assertMissing('#user-' . $user->id . '-detail-row')
                ->press('#' . $action . '-user-' . $user->id)
                ->assertVisible('#user-' . $user->id . '-detail-row')
                ->assertVisible('#editable-field-user-' . $user->id . '-name' )
                ->assertVisible('#editable-field-user-' . $user->id . '-email');
            if ($action == 'show') {
                $browser->assertVisible('#editable-field-user-' . $user->id . '-name label i.fa-edit')
                    ->assertSeeIn('#editable-field-user-' . $user->id . '-name label', $user->name)
                    ->assertMissing('#editable-field-user-' . $user->id . '-name div.input-group')
                    ->assertVisible('#editable-field-user-' . $user->id . '-email label i.fa-edit')
                    ->assertMissing('#editable-field-user-' . $user->id . '-email div.input-group')
                    ->assertSeeIn('#editable-field-user-' . $user->id . '-email label', $user->email);
            } elseif ($action == 'edit') {
                $browser->assertVisible('#editable-field-user-' . $user->id . '-name div.input-group')
                    ->assertMissing('#editable-field-user-' . $user->id . '-name label i.fa-edit')
                    ->assertVisible('#editable-field-user-' . $user->id . '-email div.input-group')
                    ->assertMissing('#editable-field-user-' . $user->id . '-email label i.fa-edit');

                $faker = Factory::create();

                $this->executeActionEdit("user", $browser,$user->id ,'name', $name = $faker->name);
                $this->executeActionEdit("user", $browser,$user->id ,'email', $email = $faker->email);

                $this->assertDatabaseHas('users', [
                    'id' => $user->id,
                    'name' => $name,
                    'email' => $email
                ]);
            }
        });
    }

    /**
     * Execute action edit.
     *
     * @param $browser
     * @param $id resource id
     * @param $field
     */
    private function executeActionEdit( $resource , $browser, $id, $field, $newValue)
    {
        $browser->type('#input-edit-' . $resource . '-' . $id . '-field-' . $field, $newValue)
            ->press('#edit-button-' . $resource . '-' . $id . '-field-' . $field);

        //Editable as been changed to read mode
        $browser->waitFor('#editable-field-' . $resource . '-' . $id . '-' . $field . ' label i.fa-edit')
                ->assertSeeIn('#editable-field-' . $resource . '-' . $id . '-'. $field . ' label', $newValue)
                ->assertMissing('#editable-field-' . $resource . '-' . $id . '-' . $field . ' div.input-group');
        // See new value in users list
        $browser->assertSeeIn('div#' . $resource . 's-list-box ', $newValue);
    }

    /**
     * Execute delete user.
     *
     * @param bool $confirm
     * @return mixed
     */
    private function execute_delete_user($confirm = true) {
        $manager = $this->createUserManagerUser();
        $user = $this->createUsers();
        $this->browse(function ($browser) use ($manager, $user, $confirm) {
            $this->login($browser,$manager);
            $browser->visit('/management/users')
                ->driver->executeScript('document.getElementById("users-list-box").scrollIntoView();');
            $browser->press('#delete-user-' . $user->id)
                ->waitFor('div#users-list-confirm-modal')
                ->assertSeeIn('div#users-list-confirm-modal','Are you sure you want to delete user?');

                if ($confirm) {
                    $browser->press('Delete');
                    $browser->waitUntilMissing('#delete-user-' . $user->id);
                }
        });

        return $user;
    }

    // ******************************
    // * User invitations           *
    // ******************************

    /**
     * Check user invitations are shown correctly.
     *
     * @test
     * @return void
     */
    public function check_user_invitations_are_shown_correctly()
    {
        dump(__FUNCTION__ );
        $manager = $this->createUserManagerUser();
        $this->createUserInvitations(75);
        $this->browse(function (Browser $browser) use ($manager) {
            $this->login($browser,$manager)
                ->visit('/management/users?expand')
                ->assertSeeIn('div#user-invitations-list-box div.box-header div.box-title', 'Invitations List')
                //See search form
                ->assertVisible('div.filter-bar')
                ->driver->executeScript('document.getElementById("user-invitations-list-vuetable-pagination").scrollIntoView();');
            //See pagination
            $browser->assertVisible('div#user-invitations-list-vuetable-pagination')
                //See pagination info
                ->assertVisible('div#user-invitations-list-vuetable-pagination div.vuetable-pagination-info')
                ->assertSeeIn('div#user-invitations-list-box div.box-body div.vuetable-pagination div.vuetable-pagination-info', 'Displaying 1 to 15 of 75 invitations')
                //See paginator
                ->assertVisible('div#user-invitations-list-vuetable-pagination div.pagination');
            //Check number of columns/fields
            $this->assertEquals(9, count($browser->elements('div#user-invitations-list-box div.box-body table.vuetable thead tr th')));
            //Check number of rows/users
            $this->assertEquals(15, count($browser->elements('tr.um-user-invitation-row')));
        });

        $this->logout();
    }

    /**
     * Add user invitation.
     *
     * @test
     */
    public function add_user_invitation()
    {
        dump(__FUNCTION__ );

        $manager = $this->createUserManagerUser();
        $faker = Factory::create();
        $email = $faker->unique()->safeEmail;

        $this->browse(function ($browser) use ($manager, $email) {
            $this->fill_add_user_invitation($browser, $manager, $email);
        });

        $this->logout();
    }

    /**
     * Check validations using adding user invitations
     *
     * @test
     */
    public function check_validations_using_add_user_invitation()
    {
        dump(__FUNCTION__ );

        $manager = $this->createUserManagerUser();

        $this->browse(function (Browser $browser) use ($manager) {

            $this->login($browser,$manager)
                ->visit('/management/users?expand');

            $browser->type('#inputUserInvitationEmail','')
                ->press('Invite');
            $this->assertSeeValidationError($browser,'#inputUserInvitationEmailError',
                'The email field is required.');

            $existingUser = $this->createUsers();
            $browser->type('#inputUserInvitationEmail',$existingUser->email)
                ->press('Invite');
            $this->assertSeeValidationError($browser,'#inputUserInvitationEmailError',
                'The email has already been taken.');
        });

    }

    /**
     * Show user invitation.
     *
     * @test
     */
    public function show_user_invitation()
    {
        dump(__FUNCTION__ );
        $invitation = $this->createUserInvitations();
        $this->activeUserInvitationDetailRowAndExecuteAction($invitation,'show');
    }

    /**
     * Modify user invitation.
     *
     * @test
     */
    public function modify_user_invitation()
    {
        dump(__FUNCTION__ );
        $invitation = $this->createUserInvitations();
        $this->activeUserInvitationDetailRowAndExecuteAction($invitation,'edit');
    }

    /**
     * Modify user invitation check validation.
     *
     * @test
     */
    public function modify_user_invitation_check_validation()
    {
        dump(__FUNCTION__ );
        $invitation = $this->createUserInvitations();

        $manager = $this->createUserManagerUser();
        $this->browse(function ($browser) use ($manager,$invitation) {

            $this->login($browser,$manager);
            $browser->visit('/management/users?expand')
                ->driver->executeScript('document.getElementById("user-invitation-list").scrollIntoView();');
            $browser->assertMissing('#user-invitations-' . $invitation->id . '-detail-row')
                ->press('#edit-user-invitation-' . $invitation->id)
                ->assertVisible('#user-invitation-' . $invitation->id . '-detail-row')
                ->assertVisible('#editable-field-user-invitation-' . $invitation->id . '-email' )
                ->assertVisible('#editable-field-user-invitation-' . $invitation->id . '-state');

            $browser->assertVisible('#editable-field-user-invitation-' . $invitation->id . '-email div.input-group')
                ->assertMissing('#editable-field-user-invitation-' . $invitation->id . '-email label i.fa-edit')
                ->assertVisible('#editable-field-user-invitation-' . $invitation->id . '-state div.input-group')
                ->assertMissing('#editable-field-user-invitation-' . $invitation->id . '-state label i.fa-edit');

            //STATE
            $browser->type('#input-edit-user-invitation-' . $invitation->id . '-field-state' , '');
            $browser->pause(1000);
            $browser->press('#edit-button-user-invitation-' . $invitation->id . '-field-state');
            $this->assertSeeValidationError($browser,'span#errorForInput-user-invitation-' . $invitation->id . '-field-state',
                'The state field is required.');

            $browser->type('#input-edit-user-invitation-' . $invitation->id . '-field-state' , 'invalid_state');
            $browser->pause(1000);
            $browser->press('#edit-button-user-invitation-' . $invitation->id . '-field-state');
            $this->assertSeeValidationError($browser,'span#errorForInput-user-invitation-' . $invitation->id . '-field-state',
                'The selected state is invalid.');

            //EMAIL
            $browser->type('#input-edit-user-invitation-' . $invitation->id . '-field-email' , '');
            $browser->pause(1000);
            $browser->press('#edit-button-user-invitation-' . $invitation->id . '-field-email');
            $this->assertSeeValidationError($browser,'span#errorForInput-user-invitation-' . $invitation->id . '-field-email',
                'The email field is required.');

            $browser->type('#input-edit-user-invitation-' . $invitation->id . '-field-email' , 'invalidemail');
            $browser->pause(1000);
            $browser->press('#edit-button-user-invitation-' . $invitation->id . '-field-email');
            $this->assertSeeValidationError($browser,'span#errorForInput-user-invitation-' . $invitation->id . '-field-email',
                'The email must be a valid email address.');

            $existingUser = $this->createUsers();
            $browser->type('#input-edit-user-invitation-' . $invitation->id . '-field-email' , $existingUser->email);
            $browser->pause(1000);
            $browser->press('#edit-button-user-invitation-' . $invitation->id . '-field-email');
            $this->assertSeeValidationError($browser,'span#errorForInput-user-invitation-' . $invitation->id . '-field-email',
                'The email has already been taken.');

        });
    }

    /**
     * Delete user invitation.
     *
     * @test
     */
    public function delete_user_invitation()
    {
        dump(__FUNCTION__ );

        $invitation = $this->execute_delete_user_invitation();

        $this->assertDatabaseMissing('user_invitations', [
            'id' => $invitation->id,
            'email' => $invitation->email
        ]);
    }

    /**
     * Delete user invitation cancel.
     *
     * @test
     */
    public function delete_user_invitation_cancel()
    {
        dump(__FUNCTION__ );

        $invitation = $this->execute_delete_user_invitation(false);

        $this->assertDatabaseHas('user_invitations', [
            'id' => $invitation->id,
            'email' => $invitation->email
        ]);
    }

    /**
     * Unauthorized users see users invitations list action buttons disabled.
     *
     * @test
     */
    public function unauthorized_users_see_user_invitations_list_action_buttons_disabled()
    {
        dump(__FUNCTION__ );
        $this->createUserInvitations(3);
        $user = $this->createUserWithOnlySeePermissions();
        $this->browse(function ($browser) use ($user) {
            $this->login($browser, $user);
            $browser->visit('/management/users?expand')
                ->driver->executeScript('document.getElementById("user-invitation-list").scrollIntoView();');
            $browser->assertVisible('[id^=delete-user-invitation]:disabled')
                ->assertVisible('[id^=edit-user-invitation]:disabled')
                ->assertVisible('[id^=show-user-invitation]:disabled');
        });
    }

    /**
     * Show create user via notification.
     *
     * @test
     */
    public function show_create_user_via_invitation()
    {
        dump(__FUNCTION__ );
        $invitation = $this->createUserInvitations();
        $this->browse(function ($browser) use ($invitation) {
            $browser->visit('/management/users/user-invitation-accept?token=' . $invitation->token)
                ->assertVisible('div#create-user-via-invitation')
                ->assertSeeIn('div#create-user-via-invitation',
                    'Thanks for accepting the user invitation ' . $invitation->email)
                ->assertVisible('div#create-user-via-invitation div#add-user');
        });
    }

    /**
     * Fill create user via notification.
     *
     * @test
     */
    public function fill_create_user_via_invitation()
    {
        dump(__FUNCTION__ );
        $invitation = $this->createUserInvitations();
        $this->browse(function ($browser) use ($invitation) {
            $faker = Factory::create();
            $browser->visit('/management/users/user-invitation-accept?token=' . $invitation->token)
                ->type('name', $faker->name)
                ->press('Create')
                ->waitFor('div#create-user-via-invitation-finishing')
                ->pause(3000)
                ->assertPathIs('/home');
        });
    }

    /**
     * Fill create user via notification validation.
     *
     * @test
     */
    public function fill_create_user_via_invitation_validation()
    {
        dump(__FUNCTION__ );
        $invitation = $this->createUserInvitations();
        $user = $this->createUsers();
        $this->browse(function ($browser) use ($invitation, $user) {
            $browser->visit('/management/users/user-invitation-accept?token=' . $invitation->token)
                ->type('password','')
                ->press('Create')
                ->waitFor('span#errorForInputCreateUserName')
                ->assertSeeIn('span#errorForInputCreateUserName','The name field is required')
                ->waitFor('span#errorForInputCreateUserPassword')
                ->assertSeeIn('span#errorForInputCreateUserPassword','The password field is required');
        });
    }

    // ************************
    // * Users Dashboard      *
    // ************************

    /**
     * Users see users dashboard menu.
     *
     * @test
     */
    public function users_see_users_dashboard_menu()
    {
        dump(__FUNCTION__ );

        $user = $this->createUsers();
        $this->browse(function (Browser $browser) use ($user){
            $this->login($browser,$user)
                ->visit('/home')
                ->assertDontSeeLink('Users dashboard');
        });

        $manager = $this->createUserManagerUser();

        $this->browse(function (Browser $browser) use ($manager){
            $this->login($browser,$manager)
                ->visit('/home')
                ->assertSeeLink('Users dashboard');
        });
    }

    // ************************
    // * Users Tracking       *
    // ************************

    /**
     * Users see users tracking menu.
     *
     * @test
     */
    public function users_see_users_tracking_menu()
    {
        dump(__FUNCTION__ );

        $user = $this->createUsers();
        $this->browse(function (Browser $browser) use ($user){
            $this->login($browser,$user)
                ->visit('/home')
                ->assertDontSeeLink('Users tracking');
        });

        $manager = $this->createUserManagerUser();

        $this->browse(function (Browser $browser) use ($manager){
            $this->login($browser,$manager)
                ->visit('/home')
                ->assertSeeLink('Users tracking');
        });
    }

    // ************************
    // * Users Profile        *
    // ************************

    /**
     * Users profile is not public.
     *
     * @test
     */
    public function user_profile_is_not_public()
    {
        dump(__FUNCTION__ );

        $this->browse(function (Browser $browser){
            $browser->visit('/user/profile')
                ->assertPathIs('/login');
        });

    }

    /**
     * Authorized users can see other users profile.
     *
     * @test
     */
    public function authorized_users_can_see_other_users_profile()
    {
        dump(__FUNCTION__ );

        $manager = $this->createUserManagerUser();
        $user = $this->createUsers();
        $this->browse(function (Browser $browser) use ($manager, $user){
            $this->login($browser,$manager);
            $browser->visit('/user/profile/' . $user->id)
                ->assertSee($user->email)
                ->assertSee($user->name);
        });
    }

    /**
     * Users can see is own user profile.
     *
     * @test
     */
    public function users_can_see_is_own_profile()
    {
        dump(__FUNCTION__ );

        $user = $this->createUsers();
        $this->browse(function (Browser $browser) use ($user){
            $this->login($browser,$user);
            $browser->visit('/user/profile')
                ->assertSee($user->email)
                ->assertSee($user->name);
        });
        $this->browse(function (Browser $browser) use ($user){
            $this->login($browser,$user);
            $browser->visit('/user/profile/' . $user->id)
                ->assertSee($user->email)
                ->assertSee($user->name);
        });

    }

    /**
     * User menu can open user profile.
     *
     * @test
     */
    public function user_menu_can_open_user_profile()
    {
        dump(__FUNCTION__ );

        $user = $this->createUsers();
        $this->browse(function (Browser $browser) use ($user){
            $this->login($browser,$user);
            $browser->visit('/home')
                ->click('#user_menu')
                ->clickLink('Profile')
                ->assertPathIs('/user/profile')
                ->assertSee($user->email)
                ->assertSee($user->name);
        });

    }

    /**
     * ----------------------------------------------------
     * Private/helper test functions for user invitations.
     * ----------------------------------------------------
     */

    /**
     * Fill add user invitation.
     *
     * @param $browser
     * @param $manager
     * @param null $email
     */
    private function fill_add_user_invitation($browser, $manager, $email = null) {
        $this->login($browser,$manager);
        $faker = Factory::create();
        $browser->visit('/management/users?expand')
            ->assertMissing('i#add-user-invitation-spinner')
            ->type('#inputUserInvitationEmail',$email = ($email === null) ? $faker->email : $email)
            ->press('Invite')
            //Assert see adding/inviting spinner/icon
            ->assertVisible('i#add-user-invitation-spinner')
            //Wait for ajax request to finish
            ->waitUntilMissing('i#add-user-invitation-spinner')
            //Assert see result ok
            ->assertVisible('div#add-user-invitation-result')
            ->assertSeeIn('div#add-user-invitation-result', 'User invited!');
        //Assert email field has been cleared
        $this->assertEquals($browser->value('#inputUserInvitationEmail'),'');
    }

    /**
     * Create user with only see permissions.
     *
     * @return mixed
     */
    private function createUserWithOnlySeePermissions()
    {
        initialize_users_management_permissions();
        $user = $this->createUsers();
        $user->givePermissionTo('see-manage-users-view');
        $user->givePermissionTo('list-users');
        $user->givePermissionTo('list-user-invitations');

        return $user;
    }

    /**
     * Execute delete user invitation.
     *
     * @param bool $confirm
     * @return mixed
     */
    private function execute_delete_user_invitation($confirm = true) {
        $manager = $this->createUserManagerUser();
        $invitation = $this->createUserInvitations();
        $this->browse(function ($browser) use ($manager, $invitation, $confirm) {
            $this->login($browser,$manager);
            $browser->visit('/management/users?expand')
                ->driver->executeScript('document.getElementById("user-invitations-list-box").scrollIntoView();');
            $browser
                ->press('#delete-user-invitation-' . $invitation->id)
                ->waitFor('div#user-invitations-list-confirm-modal')
                ->assertSeeIn('div#user-invitations-list-confirm-modal','Are you sure you want to delete user invitation?');

            if ($confirm) {
                $browser->press('Delete');
                $browser->waitUntilMissing('#delete-user-invitation-' . $invitation->id);
            }
        });

        return $invitation;
    }

    /**
     * Create user invitations.
     *
     * @param null $number
     * @return mixed
     */
    private function createUserInvitations($number = null)
    {
        return $this->createModels(UserInvitation::class,$number);
    }

    /**
     * Active user invitation detail row.
     *
     * @param $invitation
     * @param $action
     */
    private function activeUserInvitationDetailRowAndExecuteAction($invitation,$action)
    {
        $manager = $this->createUserManagerUser();
        $this->browse(function ($browser) use ($manager,$invitation, $action) {

            $this->login($browser,$manager);
            $browser->visit('/management/users?expand')
                ->driver->executeScript('document.getElementById("user-invitation-list").scrollIntoView();');
            $browser->assertMissing('#user-invitation-' . $invitation->id . '-detail-row')
                ->press('#' . $action . '-user-invitation-' . $invitation->id)
                ->assertVisible('#user-invitation-' . $invitation->id . '-detail-row')
                ->assertVisible('#editable-field-user-invitation-' . $invitation->id . '-email')
                ->assertVisible('#editable-field-user-invitation-' . $invitation->id . '-state');

            if ($action == 'show') {
                $browser->assertVisible('#editable-field-user-invitation-' . $invitation->id . '-email label i.fa-edit')
                    ->assertSeeIn('#editable-field-user-invitation-' . $invitation->id . '-email label', $invitation->email)
                    ->assertMissing('#editable-field-user-invitation-' . $invitation->id . '-email div.input-group')
                    ->assertVisible('#editable-field-user-invitation-' . $invitation->id . '-state label i.fa-edit')
                    ->assertMissing('#editable-field-user-invitation-' . $invitation->id . '-state div.input-group')
                    ->assertSeeIn('#editable-field-user-invitation-' . $invitation->id . '-state label', $invitation->state);;
            } elseif ($action == 'edit') {
                $browser->assertVisible('#editable-field-user-invitation-' . $invitation->id . '-email div.input-group')
                    ->assertMissing('#editable-field-user-invitation-' . $invitation->id . '-email label i.fa-edit')
                    ->assertVisible('#editable-field-user-invitation-' . $invitation->id . '-state div.input-group')
                    ->assertMissing('#editable-field-user-invitation-' . $invitation->id . '-state label i.fa-edit');
                $faker = Factory::create();

                $this->executeActionEdit("user-invitation", $browser,$invitation->id ,'email', $email = $faker->email);
                $this->executeActionEdit("user-invitation", $browser,$invitation->id ,'state', 'accepted');

                $this->assertDatabaseHas('user_invitations', [
                    'id' => $invitation->id,
                    'email' => $email,
                    'state' => 'accepted'
                ]);
            }

        });
    }

}
