<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Http\Request;

class WishlistController extends Controller
{
    public function addtowishlist(Request $request)
    {
        $userId = $request->userId;
        $productId = $request->productId;
    
        $existingWishlistItem = Wishlist::where('user_id', $userId)
                                         ->where('product_id', $productId)
                                         ->first();
    
        if ($existingWishlistItem) {
            $existingWishlistItem->delete();

            return response()->json(['message' => 'Product already exists in wishlist'], 400);
        }
    
        $wishlistItem = new Wishlist();
        $wishlistItem->user_id = $userId;
        $wishlistItem->product_id = $productId;
        $wishlistItem->save();
    
        return response()->json(['message' => 'Item added to wishlist successfully'], 200);
    }
    public function getWishlist()
    {
        $wishlist = Wishlist::with(['product.type', 'product.category'])->get();
        return response()->json(['wishlist' => $wishlist]);
    }
    
    public function DeleteWishlist($id){
        $idWish =  Wishlist::where('id', $id)->first();

            if($idWish){
                Wishlist::destroy($id);
                $idWish->save();
            }
    }

    
    public function wishlistCount(){
        $wishlistcount = Wishlist::count();
        return response()->json(['wishlistcount'=>$wishlistcount], 200);

    }
    
}
