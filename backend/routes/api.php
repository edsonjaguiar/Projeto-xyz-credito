<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/teste', 'Api\users_cadastradosController@status');

Route::namespace('Api')->group(function(){
    Route::post('/users_cadastrados/add', 'users_cadastradosController@add');

    Route::get('/users_cadastrados', 'users_cadastradosController@list');
    Route::get('/users_cadastrados/{id}', 'users_cadastradosController@select');
});