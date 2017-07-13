<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\Traits\CanLogin;
use Tests\Traits\CheckLinksOnMenu;
use Tests\Traits\InteractsWithUsers;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Tests\Traits\MigrationDatabaseStatistics;

/**
 * Class GoogleAppsUsersTest.
 *
 * @package Tests\Browser
 */
class GoogleAppsUsersTest extends DuskTestCase
{
    use DatabaseMigrations, InteractsWithUsers, CanLogin, MigrationDatabaseStatistics, CheckLinksOnMenu;

    /**
     * Unauthorized users cannot see google apps users menu entry.
     *
     * @test
     * @return void
     */
    public function unauthorized_users_cannot_see_google_apps_users_menu_entry()
    {
        dump(__FUNCTION__ );
        $this->assertDonSeeLinkOnMenu('Google apps Users');
    }

    /**
     * Authorized users see users management menu entry.
     *
     * @test
     * @return void
     */
    public function authorized_users_see_users_migration_menu_entry()
    {
        dump(__FUNCTION__ );

        $this->assertLinkOnMenu('Google apps Users', 'Google Apps Users Management', '/management/users/google');
    }

    /**
     * See Google Apps users dashboard.
     *
     * @test
     * @return void
     */
    public function see_google_apps_user_dashboard()
    {
        dump(__FUNCTION__ );
        $manager = $this->createUserManagerUser();

        $this->browse(function (Browser $browser) use ($manager) {
            $this->login($browser,$manager)
                ->visit('/management/users/google')
                ->assertVisible('div#google_apps_users_dashboard')
                ->assertSeeIn('div#google_apps_users_dashboard', 'Connected')
                ->assertVisible('div#google_apps_users_list');
        });
    }

}
