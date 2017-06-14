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

    /**
     * Create models.
     *
     * @param $model
     * @param null $number
     * @return mixed
     */
    private function createModels($model, $number = null) {
        $model = factory($model , $number)->create();
        return $model;
    }
}