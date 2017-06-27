<?php

namespace Tests\Traits;

use App\User;

/**
 * Class InteractsWithUsers.
 *
 * @package Tests\Browser\Traits
 */
trait InteractsWithUsers
{
    use CreatesModels;

    /**
     * Create a user with manage users permission.
     *
     * @return mixed
     */
    protected function createUserManagerUser()
    {
        $user = $this->createUsers();
        initialize_users_management_permissions();
        $user->assignRole('manage-users');
        return $user;
    }

    /**
     * Create users.
     *
     * @param null $number
     * @return mixed
     */
    private function createUsers($number = null)
    {
        return $this->createModels(User::class,$number);
    }
}