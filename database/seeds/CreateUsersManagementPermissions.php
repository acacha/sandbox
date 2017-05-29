<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

/**
 * Class CreateUsersManagementPermissions.
 */
class CreateUsersManagementPermissions extends Seeder
{
    /**
     * Run the database permission seeds.
     *
     * @return void
     */
    public function run()
    {
        initialize_users_management_permissions();
    }
}
