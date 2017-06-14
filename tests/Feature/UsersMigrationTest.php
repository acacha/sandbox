<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\Traits\ChecksAuthorizations;
use Tests\Traits\InteractsWithUsers;
use Tests\TestCase;
use DB;
use Tests\Traits\MigrationDatabaseStatistics;

/**
 * Class UsersMigrationTest.
 *
 * @package Tests\Feature
 */
class UsersMigrationTest extends TestCase
{
    use DatabaseMigrations, InteractsWithUsers, MigrationDatabaseStatistics, ChecksAuthorizations;

    /**
     * Users table exists on migration database
     *
     * @test
     * @return void
     */
    public function users_table_exists_on_migration_database()
    {
        $totalUsers = $this->totalNumberOfUsers();

        $this->assertTrue($totalUsers > 1000);
    }

    /**
     * Unauthenticated users cannot see users migration
     *
     * @test
     */
    public function unauthenticated_users_cannot_see_users_migration() {

        $response = $this->get('/management/users-migration');
        $response->assertStatus(302);
        $response->assertRedirect('/login');
    }

    /**
     * Unauthorized users cannot see users migration
     *
     * @test
     */
    public function unauthorized_users_cannot_see_users_migration() {

        $user = $this->createUsers();
        view()->share('user', $user);
        $response = $this->actingAs($user)
            ->get('/management/users-migration');
        $response->assertStatus(403);
    }

    /**
     * Authorized users can see users migration
     *
     * @test
     */
    public function authorized_users_can_see_users_migration() {

        $user = $this->createUserManagerUser();
        view()->share('user', $user);
        $response = $this->actingAs($user)
            ->get('/management/users-migration');
        $response->assertStatus(200);
    }

    /**
     * Check authorization for totalNumberOfUsers.
     *
     * @group work
     * @test
     */
    public function check_authorization_for_totalNumbersOfUsers_url() {
        initialize_users_management_permissions();
        $this->checkAuthorization(
            '/api/v1/management/users-migration/totalNumberOfUsers',
            [$this, 'signInAsUserManager']);
    }

    /**
     * Check authorization for massive migration url.
     *
     * @group work
     * @test
     */
    public function check_authorization_for_massive_migration_url() {
        initialize_users_management_permissions();
        $this->checkAuthorization(
                '/api/v1/management/users-migration/migrate',
                [$this, 'signInAsUserManager'],
                'POST');
    }

    /**
     * api massive user migration works ok.
     *
     * @group workon
     * @test
     */
    public function api_massive_user_migration_works_ok_by_default() {
        initialize_users_management_permissions();
        $this->signInAsUserManager('api');

        $response = $this->json('POST', '/api/v1/management/users-migration/migrate');

        $response->dump();
        $response
            ->assertStatus(200)
            ->assertJson([
                'done' => true,
            ]);

        foreach ($usersToMigrate as $user) {
            $this->assertDatabaseHas('users', [
                'email' => $user['email'],
                'name' => $user['name']
            ]);
        }

    }

    /**
     * api massive user migration works ok.
     *
     * @group work
     * @test
     */
    public function api_massive_user_migration_works_ok() {
        $this->signInAsUserManager();

        $usersToMigrate = $this->fakeUsersToMigrate();

        $response = $this->json('POST', '/api/v1/management/users-migration/migrate', $usersToMigrate);

        $response
            ->assertStatus(200)
            ->assertJson([
                'done' => true,
            ]);

        foreach ($usersToMigrate as $user) {
            $this->assertDatabaseHas('users', [
                'email' => $user['email'],
                'name' => $user['name']
            ]);
        }

    }

    /**
     * @return array
     */
    private function fakeUsersToMigrate()
    {
        return ['users' => [ 1, 2, 3, 4, 5, 6]];
    }

}
