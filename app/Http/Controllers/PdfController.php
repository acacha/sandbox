<?php

namespace App\Http\Controllers;

use App;
use View;

/**
 * Class PdfController.
 *
 * @package App\Http\Controllers
 */
class PdfController extends Controller
{

    public function user()
    {
        return 'todo';
    }

    /**
     * PDF VIEW.
     *
     * @return mixed
     */
    public function users()
    {
        $pdf = App::make('snappy.pdf.wrapper');
        $view = View::make('pdf.users')->render();
        $pdf->loadHTML($view);

        return $pdf->inline();
    }

    /**
     * HTML VIEW.
     *
     * @return mixed
     */
    public function users_view()
    {
        return view('pdf.users');
    }
}
