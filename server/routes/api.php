<?php

use App\Http\Controllers\CustomerController;
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

Route::get("v1/customer", [CustomerController::class, 'index']);
Route::get("v1/customer/{id}", [CustomerController::class, 'show']);
Route::post("v1/customer", [CustomerController::class, 'store']);
Route::put("v1/customer/{id}", [CustomerController::class, 'update']);
Route::delete("v1/customer/{id}", [CustomerController::class, 'destroy']);
