<?php

namespace Tests\Unit;

use Acacha\Users\Events\UserHasBeenMigrated;
use Acacha\Users\Exceptions\MigrationException;
use Acacha\Users\Services\MigrationBatch;
use Acacha\Users\Services\UserMigrations;
use Event;
use Faker\Factory;
use Mockery;
use Psr\Log\InvalidArgumentException;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

/**
 * Class UsersMigrationTest.
 *
 * @package Tests\Unit
 */
class UsersMigrationServiceTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * Tear down.
     */
    public function tearDown()
    {
        Mockery::close();
    }

    /**
     * Test user migration.
     *
     * @group working
     * @test
     */
    public function test_migrate_user_service()
    {
        $service = new UserMigrations();
        $batchService = new MigrationBatch();
        $usersToMigrate = $this->createUsersToMigrate();

        $batchId = $batchService->init();
        Event::fake();
        $newUser = $service->migrateUser($usersToMigrate,$batchId);
        Event::assertDispatched(UserHasBeenMigrated::class,
            function ($event) use ($usersToMigrate, $newUser, $batchId) {
                return ($event->sourceUserId == $usersToMigrate->id) &&
                       ($event->sourceUser == $usersToMigrate->toJson()) &&
                       ($event->newUser == $newUser) &&
                       ($event->user_migration_batch_id == $batchId) &&
                       ($event->sourceUserId == $usersToMigrate->id);

            });

        $this->assertDatabaseHas('users', [
            'name' => $usersToMigrate->username,
            'email' => $usersToMigrate->getEmailFromUser()
        ]);
    }

    /**
     * Test user migration throwns a Migration exception.
     *
     * @test
     */
    public function test_migrate_user_service_throws_migration_exception()
    {
        $service = new UserMigrations();
        $batchService = new MigrationBatch();
        $usersToMigrate = $this->createUsersToMigrate();

        \App\User::create([
            'name' => $usersToMigrate->username,
            'email' => $usersToMigrate->getEmailFromUser(),
            'password' => bcrypt('secret')
        ]);

        $batchId = $batchService->init();
        $this->expectException(MigrationException::class);
        $this->expectExceptionMessage('Integrity constraint violation');
        $service->migrateUser($usersToMigrate,$batchId);

    }

    /**
     * Test user migration throwns a Migration exception not source email.
     * @group working2
     * @test
     */
    public function test_migrate_user_service_throws_migration_exception_not_source_email()
    {
        $service = new UserMigrations();
        $batchService = new MigrationBatch();

        $faker = Factory::create();
        $usersToMigrate = Mockery::mock('User');

        $usersToMigrate->shouldReceive('getEmailFromUser')
            ->andReturn('')
            ->shouldReceive('toJson')
            ->andReturn($this->createJson());
        $usersToMigrate->id = $faker->unique()->numberBetween(1, 9000);
        $usersToMigrate->username = $faker->userName;


        $batchId = $batchService->init();
        $this->expectException(MigrationException::class);
        $this->expectExceptionMessage('Source User doesn\'t have email');
        $service->migrateUser($usersToMigrate,$batchId->id);

    }

    /**
     * Test multiple users migration.
     *
     * @group failing
     * @test
     */
    public function test_migrate_users_service()
    {
        $service = new UserMigrations();
        $batchService = new MigrationBatch();
        $usersToMigrate = $this->createUsersToMigrate(5);
        $batch = $batchService->init();
        $batchId = $batch->id;

        Event::fake();
        $service->migrateUsers($usersToMigrate, $batch);
        foreach ($usersToMigrate as $user) {
            Event::assertDispatched(UserHasBeenMigrated::class,
                function ($event) use ($user, $batchId) {
                    return ($event->sourceUserId == $user->id) &&
                        ($event->sourceUser == $user->toJson()) &&
                        ($event->user_migration_batch_id == $batchId) &&
                        ($event->sourceUserId == $user->id);

                });
            $this->assertDatabaseHas('users', [
                'name' => $user->username,
                'email' => $user->getEmailFromUser()
            ]);
        }

        $this->assertDatabaseHas('progress_batches', [
            'id' => $batchId,
            'accomplished' => 5,
            'incidences' => 0,
            'state' => 'finished'
        ]);
    }

    /**
     * Create users to migrate.
     *
     * @param int $number
     * @return array
     */
    protected function createUsersToMigrate($number = 1)
    {
        if ( $number == 1 ) {
            return $this->createUserToMigrate();
        }
        if ( $number > 1) {
            $users = [];
            foreach (range(1, $number) as $counter) {
                $users[] = $this->createUserToMigrate();
            }
            return $users;
        }
        throw new InvalidArgumentException();
    }

    /**
     * Create a fake/mock user to migrate
     */
    protected function createUserToMigrate()
    {
        $faker = Factory::create();
        $userMock = Mockery::mock('User');

        $userMock->shouldReceive('getEmailFromUser')
            ->andReturn($faker->email)
            ->shouldReceive('toJson')
            ->andReturn($this->createJson());
        $userMock->id = $faker->unique()->numberBetween(1, 9000);
        $userMock->username = $faker->userName;
        return $userMock;
    }

    /**
     * Create user Json.
     */
    protected function createJson()
    {
        //Not necessary to test if toJson method of Laravel works: third party code
        return 'JSON HERE TODO';
    }
}
