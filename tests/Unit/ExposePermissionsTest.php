<?php

namespace Tests\Unit;

use Acacha\Users\Models\UserInvitation;
use App\User;
use Auth;
use Faker\Factory;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

/**
 * Class ExposePermissionsTest.
 *
 * @package Tests\Unit
 */
class ExposePermissionsTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * Can attribute is correct with unlogged users
     *
     * @test
     * @group working
     * @return void
     */
    public function can_attribute_is_null_without_permissions()
    {
        $user = factory(User::class)->create();
        $this->assertTrue(count(json_decode($user->toJson())->can) == 0 );
    }

    /**
     * Can attribute is correct with unauthenticated users.
     *
     * @test
     * @group working
     * @return void
     */
    public function can_attribute_is_correct_with_unauthenticated_users()
    {
        initialize_users_management_permissions();
        $user = factory(User::class)->create();

        foreach (json_decode($user->toJson())->can as $permission) {
            $this->assertTrue( $permission == false);
        }
    }

    /**
     * Can attribute is correct with unauthenticated users.
     *
     * @test
     * @group working
     * @return void
     */
    public function can_attribute_is_correct_with_unauthorized_users()
    {
        initialize_users_management_permissions();
        $user = factory(User::class)->create();

        Auth::login($user);
        foreach (json_decode($user->toJson())->can as $permission) {
            $this->assertTrue( $permission == false);
        }
    }

    /**
     * Can attribute is correct with authorized users.
     *
     * @test
     * @group working
     * @return void
     */
    public function can_attribute_is_correct_with_authorized_users()
    {
        initialize_users_management_permissions();
        $user = factory(User::class)->create();
        $user->givePermissionTo('list-users');

        Auth::login($user);
        foreach (json_decode($user->toJson())->can as $permission) {
            if ($permission == 'list-users') {
                $this->assertTrue( $permission == true);
            } else {
                $this->assertTrue( $permission == false);
            }
        }
    }

}
