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
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

<<<<<<< HEAD
Route::get('/prod', [ProductController::class, 'create']);
Route::get('/updating', [ProductController::class, 'updating']);

Route::get('/cat', [CategoryController::class, 'create']);
Route::get('/gender', [GenderController::class, 'create']);
Route::get('/createSizes', [ProductController::class, 'createSizes']);
Route::get('/createColor', [ProductController::class, 'createColor']);

=======
require __DIR__.'/auth.php';
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
