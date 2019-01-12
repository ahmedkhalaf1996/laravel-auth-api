<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|

passport info 

Client ID: 1
Client Secret: 98hFZzFQJ0NPCO1jtzmRIOVonV4QbM06eUowQnQ9
Password grant client created successfully.
Client ID: 2
Client Secret: SUFLjDz4vECANvRKnpfWkU5ZPO2kfsKSqJAJmsYF



*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});




Route::apiResources(['user' => 'API\UserController']);
Route::get('profile', 'API\UserController@profile');
Route::get('findUser', 'API\UserController@search');
Route::put('profile', 'API\UserController@updateProfile');





