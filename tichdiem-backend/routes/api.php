<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PointController;
use App\Http\Controllers\GiftController;


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

Route::get('/points',[App\Http\Controllers\PointController::class, 'index']);

Route::post('/points/save',[App\Http\Controllers\PointController::class, 'store']);

Route::put('/points/update/{id}',[App\Http\Controllers\PointController::class, 'update']);

Route::delete('/points/delete/{id}',[App\Http\Controllers\PointController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});