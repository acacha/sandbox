<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => 'auth'], function () {
    //    Route::get('/link1', function ()    {
//        // Uses Auth Middleware
//    });

    //Please do not remove this if you want adminlte:route and adminlte:link commands to works correctly.
    #adminlte_routes
    Route::get('proves', 'ProvesController@index')->name('proves');

    Route::get('tokens', 'TokensController@index')->name('tokens');

});

Route::get('user/pdf/{id}', 'PdfController@user');

Route::get('users/pdf', 'PdfController@users');

Route::get('users/pdf/view', 'PdfController@users_view');

Route::resource('Prova','Prova');
