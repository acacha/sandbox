<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\Traits\CanLogin;
use Tests\Traits\InteractsWithUsers;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Tests\Traits\MigrationDatabaseStatistics;

/**
 * Class UsersMigrationTest.
 *
 * @package Tests\Browser
 */
class UsersMigrationTest extends DuskTestCase
{
    use DatabaseMigrations, InteractsWithUsers, CanLogin, MigrationDatabaseStatistics;

    /**
     * UnAuthorized users  cannot see users management menu entry.
     *
     * @test
     * @return void
     */
    public function unauthorized_users_cannot_see_users_migration_menu_entry()
    {
        dump(__FUNCTION__ );
        $user = $this->createUsers();

        $this->browse(function (Browser $browser) use ($user) {
            $this->login($browser,$user)
                ->visit('/home')
                ->assertDontSeeLink('Users migration');
        });

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
        $manager = $this->createUserManagerUser();

        $this->browse(function (Browser $browser) use ($manager) {
            $this->login($browser,$manager)
                ->visit('/home')
                ->assertSeeLink('Users migration')
                ->clickLink('Users migration')
                ->assertTitleContains('Users migration')
                ->assertPathIs('/management/users-migration');
        });

    }

    /**
     * See users migration dashboard.
     * @group working
     * @test
     * @return void
     */
    public function see_users_migration_dashboard()
    {
        dump(__FUNCTION__ );
        $manager = $this->createUserManagerUser();

        $this->browse(function (Browser $browser) use ($manager) {
            $totalUsers = $this->totalNumberOfUsers();
            $this->login($browser,$manager)
                ->visit('/management/users-migration')
                ->assertSeeIn('div.info-box div.info-box-number', $totalUsers);
        });
    }

}
