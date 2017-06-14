<?php

namespace Tests\Traits;

use Laravel\Dusk\Browser;

/**
 * Class CanLogin.
 *
 * @package Tests\Browser\Traits
 */
trait CanLogin
{
    /**
     * Login.
     *
     * @param $browser
     * @param $user
     * @return mixed
     */
    protected function login($browser,$user) {
        $browser->loginAs($user);
        view()->share('signedIn',true);
        view()->share('user', $user);
        return $browser;
    }

    /**
     * Logout.
     */
    protected function logout()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/home')
                ->click('#user_menu')
                ->click('#logout')
                ->pause(2000);
        });
    }
}