<?php

use Illuminate\Http\Request;
use App\Http\Controllers\PointController;
use App\Http\Controllers\GiftController;
use App\Http\Controllers\UserController;
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

Route::post('login', 'App\Http\Controllers\UserController@login');
Route::post('register', 'App\Http\Controllers\UserController@register');

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('users', 'App\Http\Controllers\UserController@users');
    Route::put('/users/update',[UserController::class, 'update']);
    Route::post('/users/reset-password', [UserController::class, 'resetPassword']);

    Route::get('/gifts',[GiftController::class, 'index']);
    Route::get('/gifts/{id}',[GiftController::class, 'show']);
    Route::post('/gifts/save',[GiftController::class, 'store']);
    Route::put('/gifts/update/{id}',[GiftController::class, 'update']);
    Route::delete('/gifts/delete/{id}',[GiftController::class, 'destroy']);

    Route::get('/points',[PointController::class, 'index']);
    Route::get('/points/{id}',[PointController::class, 'show']);
    Route::post('/points/save',[PointController::class, 'store']);
    Route::put('/points/update/{id}',[PointController::class, 'update']);
    Route::delete('/points/delete/{id}',[PointController::class, 'destroy']);
});