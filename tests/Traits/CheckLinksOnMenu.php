<?php

namespace Tests\Traits;

use Laravel\Dusk\Browser;

/**
 * Class CheckLinksOnMenu.
 *
 * @package Tests\Browser\Traits
 */
trait CheckLinksOnMenu
{
    /**
     * Assert don't see link on menu.
     */
    private function assertDonSeeLinkOnMenu($link, $path = '/home'){
        $user = $this->createUsers();

        $this->browse(function (Browser $browser) use ($user, $link, $path) {
            $this->login($browser,$user)
                ->visit($path)
                ->assertDontSeeLink($link);
        });
    }

    /**
     * Assert don't see link on menu.
     */
    private function assertLinkOnMenu($link, $title, $destinationPath, $path = '/home'){
        $manager = $this->createUserManagerUser();

        $this->browse(function (Browser $browser) use ($manager, $link, $path, $title, $destinationPath) {
            $this->login($browser,$manager)
                ->visit($path)
                ->assertSeeLink($link)
                ->clickLink($link)
                ->assertTitleContains($title)
                ->assertPathIs($destinationPath);
        });
    }
}