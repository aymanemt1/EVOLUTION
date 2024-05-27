<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MacrosConsumedController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\WishlistController;
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

<<<<<<< HEAD

Route::get('/getcollections', [ProductController::class, 'getProductsHome']);
Route::get('/getProductsShop', [ProductController::class, 'getProductsShop']);
Route::get('/getCategoriesTypes', [CategoryController::class, 'getCategoriesTypes']);
Route::post('/cart', [CartController::class, 'addToCart']);
Route::put('/updateCart', [CartController::class, 'updateCart']);
Route::get('/cartCount', [CartController::class, 'cartCount']);
Route::get('/wishlistcount', [WishlistController::class, 'wishlistcount']);
Route::get('/getCartItem', [CartController::class, 'getCartItem']);
Route::get('/product-detail/{id}', [ProductController::class, 'show']);
Route::delete('DeleteCart/{id}',[CartController::class,'DeleteCart']);
Route::delete('DeleteWishlist/{id}',[WishlistController::class,'DeleteWishlist']);

Route::post('/AddReview',[ReviewController::class,'AddReview']);

Route::post('/AddOrder',[OrderController::class,'AddOrder']);
Route::get('/getOrderrs',[OrderController::class,'getOrderrs']);

Route::get('/getwishlist', [WishlistController::class, 'getwishlist']);
Route::post('/wishlist', [WishlistController::class, 'addtowishlist']);

route::post('/signin',[AuthController::class,'signin']);
route::post('/signup',[AuthController::class,'signup']);
route::post('/logout',[AuthController::class,'logout']);

//routes for calculatot 
// routes/api.php

use App\Http\Controllers\CaloriesUserController;
Route::post('/calories-users', [CaloriesUserController::class, 'store']);
Route::put('/macros/{id}', [MacrosConsumedController::class, 'update']);
Route::put('/calories_users/{id}', [CaloriesUserController::class, 'update']);

// after authentication 
//Route::middleware('auth:api')->put('/macros', [MacrosConsumedController::class, 'update']);


=======
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
>>>>>>> talibi-dev
