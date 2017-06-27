<?php

namespace Tests\Traits;

/**
 * Class AssertResponseValidations.
 *
 * @package Tests\Browser\Traits
 */
trait AssertResponseValidations
{
    /**
     * Assert Response validation.
     */
    private function assertResponseValidation($response, $statusCode, $field, $value){
        $response->assertStatus($statusCode)->assertExactJson([
            $field => [
                0 => $value
            ]
        ]);
    }
}