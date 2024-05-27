<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkoutController;
use App\Http\Controllers\UserInfoController;
use App\Http\Controllers\MyWorkoutsController;
use App\Http\Controllers\WeightTrackingController;
use App\Http\Controllers\WorkoutExerciceController;
use App\Http\Controllers\FavoriteExerciceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(FavoriteExerciceController::class)->group(function () {
    Route::get('favorite-exercice/{id}', 'index');
    Route::post('/favorite-exercice', 'store');
    Route::delete('/favorite-exercice/{memberId}/{exerciseId}', 'destroy');
});

Route::controller(WeightTrackingController::class)->group(function () {
    Route::get('/weight-tracking/{id}', 'index');
    Route::post('/weight-tracking', 'store');
});

Route::controller(UserInfoController::class)->group(function () {
    Route::get('/user/{id}', 'index');
});
Route::controller(WorkoutController::class)->group(function () {
    Route::get('/workouts', 'index');
    Route::get('/workouts/{id}', 'show');
    Route::post('/workouts', 'store');
    Route::patch('/workouts/{id}/done', 'updateWorkoutDone');
    Route::patch('/workout_exercices/{id}/done', 'updateExerciseDone');
    Route::put('/workouts/{id}', 'update');
    Route::delete('/workouts/{id}', 'destroy');
    Route::get('/workouts/{id}/exercises', 'getWorkoutExercises');
});
