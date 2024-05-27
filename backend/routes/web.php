<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\GenderController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/prod', [ProductController::class, 'create']);
Route::get('/updating', [ProductController::class, 'updating']);

Route::get('/cat', [CategoryController::class, 'create']);
Route::get('/gender', [GenderController::class, 'create']);
Route::get('/createSizes', [ProductController::class, 'createSizes']);
Route::get('/createColor', [ProductController::class, 'createColor']);

