<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

use Tests\Traits\CanSignInUsersManagement;

/**
 * Class TestCase.
 *
 * @package Tests
 */
abstract class TestCase extends BaseTestCase
{
    use CreatesApplication, CanSignInUsersManagement;

}
