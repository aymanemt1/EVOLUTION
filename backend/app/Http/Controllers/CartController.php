<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\OrderItem;
use App\Models\Orderr;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\ProdVariant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
    
        // Check if the product exists and its stock is sufficient
        $product = Product::findOrFail($productId);
        if ($product->stock < 1) {
            return response()->json(['message' => 'Product is out of stock'], 400);
        }
    
        // Check if the requested quantity exceeds available stock
        if ($quantity > $product->stock) {
            return response()->json(['messageError' => 'Requested quantity exceeds available stock'], 400);
        }
    
        $cartItem = Cart::where('user_id', $userId)
                        ->where('product_id', $productId)
                        ->first();
    
        if ($cartItem) {
            $cartItem->quantity = $quantity; 
            $cartItem->save();
            return response()->json(['message' => 'Item quantity has been updated in your bag']);
        } else {
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
    
    public function getCartItem(Request $request)
    {
        $userId = $request->query('id');

        if (!$userId) {
            return response()->json(['error' => 'User ID is required'], 400);
        }
        
        $cartItems = Cart::with('product')->where('user_id',$userId)->get();
        $cartCount = $cartItems->count();
        
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
    
                return response()->json(['cartItems' => $cartItemsWithPrices, 'totalPrice' => $totalPrice,'totalCartPrice'=>$totalCartPrice,'cartCount' => $cartCount,], 200);
    }

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
