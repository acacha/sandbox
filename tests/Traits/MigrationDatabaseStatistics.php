<?php

namespace Tests\Traits;

use DB;

/**
 * Class MigrationDatabaseStatistics.
 *
 * @package Tests\Browser\Traits
 */
trait MigrationDatabaseStatistics
{
    /**
     * Total number of users
     */
    protected function totalNumberOfUsers() {
        $users = DB::connection('migration_ro')
            ->table('users')
            ->get();

        return count($users);
    }
}