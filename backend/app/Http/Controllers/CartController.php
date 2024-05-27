<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\OrderItem;
use App\Models\Orderr;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\ProdVariant;
use Illuminate\Http\Request;
<<<<<<< HEAD
use Illuminate\Support\Facades\Auth;
=======
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $userId = $request->userId;
        $productId = $request->productId;
        $quantity = $request->quantity;
        $sizeId = $request->size;
        $colorId = $request->color;
    
        $cartItem = Cart::where('user_id', $userId)
                        ->where('product_id', $productId)
                        ->first();
    
        if ($cartItem) {
            $cartItem->quantity = $quantity; 
            $cartItem->save();
            return response()->json(['message' => 'Item quantity has been updated in your bag']);
        } else {
            $product = Product::findOrFail($productId);
    
            $cartItem = new Cart();
            $cartItem->user_id = $userId;
            $cartItem->product_id = $productId;
            $cartItem->quantity = $quantity;
            $cartItem->price = $product->price;
            $cartItem->save();

            $prod = new ProductVariant();
            $prod->product_id = $productId;
            $prod->size_id = $sizeId;
            $prod->color_id = $colorId;
            $prod->save();
        }
    
        return response()->json(['message' => 'Item added to cart successfully'], 200);
    }
    
<<<<<<< HEAD
    public function getCartItem(Request $request)
    {
        $userId = $request->query('id');

        if (!$userId) {
            return response()->json(['error' => 'User ID is required'], 400);
        }
        $cartItems = Cart::with('product')->where('user_id',$userId)->get();
        $cartCount = $cartItems->count();
=======
    public function getCartItem()
    {
        $userId = 1;
    
        $cartItems = Cart::with('product')->where('user_id', $userId)->get();
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
        
        $totalPrice = 0;
        $cartItemsWithPrices = $cartItems->map(function ($cartItem) use (&$totalPrice) {
            $ProdItems = ProductVariant::with('product','size','color')->where("product_id",$cartItem->product_id)->get();
            $itemPrice = $cartItem->quantity * $cartItem->price;
            $totalPrice += $itemPrice;
            return [
                'cart_id' => $cartItem->id,
                'product_id' => $cartItem->product_id,
                'quantity' => $cartItem->quantity,
                'price' => $cartItem->price,
                'title' => $cartItem->product->title, 
                'image' => $cartItem->product->image, 
                'total_price' => $itemPrice,
                'ProdItems' => $ProdItems,
            ];
        });

        $totalCartPrice = $cartItemsWithPrices->sum('total_price');
    
<<<<<<< HEAD
                return response()->json(['cartItems' => $cartItemsWithPrices, 'totalPrice' => $totalPrice,'totalCartPrice'=>$totalCartPrice,'cartCount' => $cartCount,], 200);
    }

=======
        return response()->json(['cartItems' => $cartItemsWithPrices, 'totalPrice' => $totalPrice,'totalCartPrice'=>$totalCartPrice], 200);
    }

    public function cartCount(){
        $countCart = Cart::count();
        return response()->json(['countCart'=>$countCart], 200);

    }
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
    public function DeleteCart($id)
    {
        $cart = Cart::find($id);
    
        if ($cart) {
            $productId = $cart->product_id;
            $cart->delete();
    
            ProductVariant::where('product_id', $productId)->delete();
        }
    }
    
    public function updateCart(Request $request)
    {
        $Cart = $request->Cart;
    
        foreach ($Cart as $cartItem) {
            $cart = Cart::findOrFail($cartItem['cart_id']); 
            $cart->quantity = $cartItem['quantity'];
            $cart->save();
    
            // Get the associated OrderItem for the current cart item
            $orderItem = OrderItem::where('product_id', $cartItem['product_id'])->first();
            if ($orderItem) {
                $orderItem->quantity = $cartItem['quantity'];
                $orderItem->save();
            }
        }
    
        return response()->json(['message' => 'Cart updated successfully'], 200);
    }
    
    
}
