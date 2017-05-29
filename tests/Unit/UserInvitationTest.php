<?php

namespace Tests\Unit;

use Acacha\Users\Models\UserInvitation;
use Faker\Factory;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

/**
 * Class UserInvitationTest.
 *
 * @package Tests\Unit
 */
class UserInvitationTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * An user invitation is created correctly.
     *
     * @test
     * @return void
     */
    public function an_user_invitation_is_created_correctly()
    {
        $faker = Factory::create();
        $invitation = UserInvitation::create(['email' => $faker->email ]);
        $this->assertInstanceOf(UserInvitation::class, $invitation);
        $this->assertEquals('pending',$invitation->state);
        $this->assertEquals(64,strlen($invitation->token));
        $this->assertTrue($invitation->pending());
        $this->assertFalse($invitation->accepted());
    }

    /**
     * An user invitation is accepted correctly.
     *
     * @test
     * @return void
     */
    public function an_user_invitation_is_accepted_correctly()
    {
        $faker = Factory::create();
        $invitation = UserInvitation::create(['email' => $faker->email ]);
        $invitation->accept();
        $this->assertFalse($invitation->pending());
        $this->assertTrue($invitation->accepted());
    }
}
