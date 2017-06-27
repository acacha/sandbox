<?php

namespace Tests\Browser;

use Acacha\Users\Models\ProgressBatch;
use Acacha\Users\Models\UserMigration;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\Traits\CanLogin;
use Tests\Traits\InteractsWithUsers;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use Tests\Traits\MigrationDatabaseStatistics;
use App\User as UserOnDestination;

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
     *
     * @group todo
     * TODO @ test
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
                ->assertSeeIn('div#migration_dashboard', $totalUsers);
        });
    }

    /**
     * See total users in destination at migration dashboard.
     * @group working
     * @test
     */
    public function see_total_users_in_destination_at_migration_dashboard()
    {
        dump(__FUNCTION__ );
        $manager = $this->createUserManagerUser();

        $this->browse(function (Browser $browser) use ($manager) {
            $this->login($browser,$manager)
                ->visit('/management/users-migration')
                ->assertSeeIn('span#totalUsersInDestination', UserOnDestination::all()->count());
        });
    }

    /**
     * See total migrated users in destination at migration dashboard.
     *
     * @test
     */
    public function see_total_migrated_users_in_destination_at_migration_dashboard()
    {
        dump(__FUNCTION__ );
        $manager = $this->createUserManagerUser();

        $this->createUserMigrations(3);

        $this->browse(function (Browser $browser) use ($manager) {
            $this->login($browser,$manager)
                ->visit('/management/users-migration')
                ->assertSeeIn('span#totalMigratedUsersInDestination', 3);
        });
    }

    /**
     * See users migration history.
     *
     * @test
     * @return void
     */
    public function see_users_migration_history()
    {
        dump(__FUNCTION__ );
        $manager = $this->createUserManagerUser();

        $userMigrations = $this->createUserMigrations(3);

        $this->browse(function (Browser $browser) use ($manager, $userMigrations) {
            $this->login($browser,$manager)
                ->visit('/management/users-migration')
                ->assertVisible('div#users-migration-history');

                foreach ($userMigrations as $userMigration) {
                  $browser->assertSeeIn('div#users-migration-history',
                        'User ' . $userMigration->user->name . '|' . $userMigration->user->email. ' ( '.$userMigration->user->id.' ) migrated from JSON');
                }

        });
    }

    /**
     * See batch users migration history.
     *
     * @group failing
     * @test
     * @return void
     */
    public function see_batchusers_migration_history()
    {
        dump(__FUNCTION__ );
        $manager = $this->createUserManagerUser();

        $batches = $this->createBatchUserMigrations(3);

        $this->browse(function (Browser $browser) use ($manager, $batches) {
            $this->login($browser,$manager)
                ->visit('/management/users-migration')
                ->pause(1000000000)
                ->assertVisible('div#batch-users-migration-history');

            foreach ($batches as $batch) {
                $browser->assertSeeIn('div#users-migration-history',
                    'User ' . $batch->user->name . '|' . $batch->user->email. ' ( '.$batch->user->id.' ) migrated from JSON');
            }

        });
    }

    /**
     * Create users migrations.
     *
     * @param $number
     * @return mixed
     */
    private function createUserMigrations($number)
    {
        return $this->createModels(UserMigration::class,$number);
    }

    /**
     * Create users migrations.
     *
     * @param $number
     * @return mixed
     */
    private function createBatchUserMigrations($number)
    {
        return factory(ProgressBatch::class , $number)->create([
            'type' => UserMigration::class
        ]);

    }

}
