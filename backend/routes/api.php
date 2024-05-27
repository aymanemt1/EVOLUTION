<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
<<<<<<< HEAD
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DeliveryController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PlanController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SellerController;
use App\Http\Controllers\WishlistController;
use App\Models\Delivery;
=======
use App\Http\Controllers\MacrosConsumedController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\WishlistController;
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::get('/getcollections', [ProductController::class, 'getProductsHome']);
Route::get('/getProductsShop', [ProductController::class, 'getProductsShop']);
Route::get('/getCategoriesTypes', [CategoryController::class, 'getCategoriesTypes']);
Route::post('/cart', [CartController::class, 'addToCart']);
Route::put('/updateCart', [CartController::class, 'updateCart']);
<<<<<<< HEAD
Route::get('/wishlistcount', [WishlistController::class, 'wishlistcount']);

Route::get('/getCartItem', [CartController::class, 'getCartItem']);


Route::get('/product-detail/{id}/', [ProductController::class, 'show']);
=======
Route::get('/cartCount', [CartController::class, 'cartCount']);
Route::get('/wishlistcount', [WishlistController::class, 'wishlistcount']);
Route::get('/getCartItem', [CartController::class, 'getCartItem']);
Route::get('/product-detail/{id}', [ProductController::class, 'show']);
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
Route::delete('DeleteCart/{id}',[CartController::class,'DeleteCart']);
Route::delete('DeleteWishlist/{id}',[WishlistController::class,'DeleteWishlist']);

Route::post('/AddReview',[ReviewController::class,'AddReview']);

Route::post('/AddOrder',[OrderController::class,'AddOrder']);
Route::get('/getOrderrs',[OrderController::class,'getOrderrs']);

<<<<<<< HEAD
Route::get('/client',[ClientController::class,'clientdata']);
Route::put('/client',[ClientController::class,'update']);
Route::put('/seller',[SellerController::class,'update']);

=======
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
Route::get('/getwishlist', [WishlistController::class, 'getwishlist']);
Route::post('/wishlist', [WishlistController::class, 'addtowishlist']);

route::post('/signin',[AuthController::class,'signin']);
route::post('/signup',[AuthController::class,'signup']);
route::post('/logout',[AuthController::class,'logout']);
<<<<<<< HEAD
Route::post('/google-signup', [AuthController::class, 'googleSignup']);
Route::post('/check-user', [AuthController::class, 'checkUser']);
Route::get('/getuser', [AuthController::class, 'getuser']);

route::post('/AddSeller',[SellerController::class,'AddSeller']);
route::post('/LoginSeller',[SellerController::class,'LoginSeller']);

Route::post('/selectedplan', [PlanController::class, 'selectedplan']);
Route::get('/getplans', [PlanController::class, 'getplans']);
Route::get('/getdelivery', [DeliveryController::class, 'getdelivery']);
Route::get('/getseller', [SellerController::class, 'getseller']);


Route::post('/products', [ProductController::class, 'createproducts']);
Route::get('/getproductseller', [ProductController::class, 'getproductseller']);
Route::get('/showformproduct', [ProductController::class, 'showformproduct']);
Route::get('/product/{id}', [ProductController::class, 'edit']);
Route::delete('/product/{id}', [ProductController::class, 'deleteprod']);
Route::put('/product/{id}', [ProductController::class, 'update']);

Route::put('/seller',[SellerController::class,'update']);
Route::get('/getProductImage/{imageName}', [ProductController::class, 'getProductImage']);
Route::put('/product', [ProductController::class, 'updateproduct']);
=======

//routes for calculatot 
// routes/api.php

use App\Http\Controllers\CaloriesUserController;
Route::post('/calories-users', [CaloriesUserController::class, 'store']);
Route::put('/macros/{id}', [MacrosConsumedController::class, 'update']);
Route::put('/calories_users/{id}', [CaloriesUserController::class, 'update']);

// after authentication 
//Route::middleware('auth:api')->put('/macros', [MacrosConsumedController::class, 'update']);


>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
