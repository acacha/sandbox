<?php

namespace Tests\Feature;

use Config;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\Traits\ChecksAuthorizations;
use Tests\TestCase;

/**
 * Class GoogleAppsUsersTest.
 *
 * @package Tests\Feature
 */
class GoogleAppsUsersTest extends TestCase
{
    use DatabaseMigrations,
        ChecksAuthorizations;

    /**
     * Check authorization for google apps users.
     *
     * @test
     */
    public function check_authorization_for_google_apps_users() {
        initialize_users_management_permissions();
        $this->checkAuthorization(
            '/management/users/google',
            [$this, 'signInAsUserManager']);
    }

    /**
     * Check authorization for check google apps connection.
     *
     * @test
     */
    public function check_authorization_for_check_google_apps_connection() {
        initialize_users_management_permissions();
        $this->checkAuthorization(
            '/api/v1/management/users-google/check',
            [$this, 'signInAsUserManager'],
            'GET');
    }

    /**
     * Api check google apps connection.
     *
     * @test
     */
    public function api_check_google_apps_connection() {
        initialize_users_management_permissions();

        $this->signInAsUserManager('api')
            ->json('GET', '/api/v1/management/users-google/check')
            ->assertStatus(200)
            ->assertJson([
                'state' => 'connected'
            ]);
    }

    /**
     * Api check google apps connection error.
     *
     * @test
     */
    public function api_check_google_apps_connection_error() {
        initialize_users_management_permissions();

        Config::set('google.service.file', '');
        $this->signInAsUserManager('api')
            ->json('GET', '/api/v1/management/users-google/check')
            ->assertStatus(200)
            ->assertJson([
                'state' => 'error'
            ]);
    }

    /**
     * Api check google apps connection error 2.
     *
     * @test
     */
    public function api_check_google_apps_connection_error_2() {
        initialize_users_management_permissions();

        Config::set('google.service.file', '');
        Config::set('google.google_apps_admin_user_email', '');
        $this->signInAsUserManager('api')
            ->json('GET', '/api/v1/management/users-google/check')
            ->assertStatus(200)
            ->assertJson([
                'state' => 'error'
            ]);
    }

    /**
     * Check authorization for list google apps users.
     *
     * @test
     */
    public function check_authorization_for_list_google_apps_users() {
        initialize_users_management_permissions();
        $this->checkAuthorization(
            '/api/v1/management/users-google',
            [$this, 'signInAsUserManager'],
            'GET');
    }

    /**
     * Api lists all users with pagination.
     *
     * @test
     */
    public function api_list_all_users_with_pagination() {
        initialize_users_management_permissions();

        $this->signInAsUserManager('api')
            ->json('GET', '/api/v1/management/users-google')
            ->assertStatus(200)
//            ->dump()
            ->assertJsonStructure([
                'current_page',
                'data' => [
                    '*' => ['primaryEmail']
                ],
                'from',
                'last_page',
                'next_page_url',
                'per_page',
                'prev_page_url',
                'to',
                'total'
            ]);
    }

    /**
     * Api lists all users with pagination for a specific page.
     *
     * @todotest
     */
    public function api_list_all_users_with_pagination_test_specific_page() {
        //Google Api works with pageToken no way to obtain a specific page?!!!
    }

    /**
     * Check authorization for sync local google apps users.
     * 
     * @group failing
     * @test
     */
    public function check_authorization_for_sync_local_google_apps_users() {
        initialize_users_management_permissions();
        $this->checkAuthorization(
            '/api/v1/management/users-google/local-sync',
            [$this, 'signInAsUserManager'],
            'GET');
    }

    /**
     * Api executes local sync.
     * @group failing
     * @test
     */
    public function api_executes_local_sync() {
        initialize_users_management_permissions();

        $this->signInAsUserManager('api')
            ->json('GET', '/api/v1/management/users-google/local-sync')
//            ->dump()
            ->assertStatus(200);
//            ->assertJsonStructure([
//                'current_page',
//                'data' => [
//                    '*' => ['primaryEmail']
//                ],
//                'from',
//                'last_page',
//                'next_page_url',
//                'per_page',
//                'prev_page_url',
//                'to',
//                'total'
//            ]);
    }
}
