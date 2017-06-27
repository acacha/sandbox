<?php

namespace Tests\Traits;

/**
 * Class ChecksAuthorizations.
 *
 * @package Tests\Browser\Traits
 */
trait ChecksAuthorizations
{
    /**
     * Check authorization for url.
     *
     * @param $uri
     * @param string $httpMethod
     */
    protected function checkAuthorization($uri, $signInCallback, $httpMethod = 'GET', $input = []) {
        $this->checkGuests($uri, $httpMethod);
        $this->checkUsersWithoutAuthorization($uri, $httpMethod, $input);
        $this->checkAuthorizedUsers($uri, $signInCallback, $httpMethod, $input);
    }

    /**
     * Check guests user returns 401 for a protected URI.
     *
     * @param $uri
     * @param string $httpMethod
     */
    protected function checkGuests($uri, $httpMethod = 'GET')
    {
        $response = $this->json($httpMethod,$uri);
        $response->assertStatus(401);
    }

    /**
     * Check users without authorization returns 403 for a protected URI.
     *
     * @param $uri
     * @param string $httpMethod
     */
    protected function checkUsersWithoutAuthorization($uri, $httpMethod = 'GET', $input = [])
    {
        $this->signIn(null,'api');
        $response = $this->json($httpMethod, $uri, $input);
        $response->assertStatus(403);
    }

    /**
     * Check authorized users returns 200 code for a protected URI.
     *
     * @param $uri
     * @param $signInCallback
     * @param string $httpMethod
     */
    protected function checkAuthorizedUsers($uri, $signInCallback,  $httpMethod = 'GET', $input = [])
    {
        $signInCallback('api');
        $response = $this->json($httpMethod,$uri, $input);
        $response->assertStatus(200);
    }
}