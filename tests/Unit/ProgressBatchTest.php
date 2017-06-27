<?php

namespace Tests\Unit;

use Acacha\Stateful\Exceptions\IllegalStateTransitionException;
use Acacha\Users\Models\ProgressBatch;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

/**
 * Class ProgressBatchTest.
 *
 * @package Tests\Unit
 */
class ProgressBatchTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * A progress batch is created correctly.
     *
     * @test
     * @return void
     */
    public function a_progress_batch_is_created_correctly()
    {
        $batch = ProgressBatch::create();
        $this->assertInstanceOf(ProgressBatch::class, $batch);
        $this->assertEquals('pending',$batch->state);
        $this->assertTrue($batch->pending());
    }

    /**
     * A progress batch is finished correctly.
     *
     * @test
     * @return void
     */
    public function a_progress_batch_is_finished_correctly()
    {
        $batch = ProgressBatch::create([]);
        $batch->accomplished = 45;
        $batch->incidences = 20;
        $batch->finish();
        $this->assertFalse($batch->pending());
        $this->assertEquals('finished',$batch->state);
        $this->assertTrue($batch->finished());
    }

    /**
     * Finish validation works correctly.
     *
     * @test
     * @return void
     */
    public function finish_validation_works_correctly()
    {
        $batch = ProgressBatch::create();
        $this->expectException(IllegalStateTransitionException::class);
        $batch->finish();
    }

    /**
     * A progress batch is stopped correctly.
     *
     * @test
     * @return void
     */
    public function a_progress_batch_is_stopped_correctly()
    {
        $batch = ProgressBatch::create();
        $batch->stop();
        $this->assertTrue($batch->stopped());
        $this->assertEquals('stopped',$batch->state);
        $this->assertFalse($batch->pending());
    }

    /**
     * A progress batch is resumed correctly.
     *
     * @test
     * @return void
     */
    public function a_progress_batch_is_resumed_correctly()
    {
        $batch = ProgressBatch::create();
        $batch->stop();
        $batch->resume();
        $this->assertFalse($batch->stopped());
        $this->assertTrue($batch->pending());
        $this->assertEquals('pending',$batch->state);
    }
}
