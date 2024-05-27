<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Categorytype;
use App\Models\Color;
use App\Models\Gender;
use App\Models\Product;
use App\Models\Size;
use App\Models\Type;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function create()
    {
        $productsData = [
            [
                'title' => "Shoes",
                'sub_description' => "High performance road shoes for women",
                'description' => "These custom road shoes offer the best in comfort, performance, and style. Featuring a lightweight design and breathable materials, they are perfect for long rides and races.",
                'price' => 120,
                'stock' => 40
            ],
         
        ];
          $images = [
        'shoes20.png',
        'shoes21.png',
        'shoes22.png',
        'shoes23.png',
        'shoes25.png',
    ];
    
        for ($i = 0; $i < 18; $i++) {
            $productData = $productsData[array_rand($productsData)];
            $product = new Product();
    
            $product->title = $productData['title'];
            $product->sub_description = $productData['sub_description'];
            $product->description = $productData['description'];
            $product->price = $productData['price'];
            $product->image =$images[array_rand($images)];;
            $product->stock = $productData['stock'];
            $product->gender_id = 2; // Randomly assign gender_id between 1 and 2
            $product->category_id = 1; // All products have category_id 1
            $product->type_id = rand(1,2); // Randomly assign type_id between 1 and 3
    
            $product->save();
        }
    
        return response()->json(['message' => '50 products created successfully.']);
    }
    

    public function updating()
    {
        $products = Product::where('image', "cap1.png")->get();
    
        foreach ($products as $product) {
            $product->image = 'cap6.png';
            $product->save(); 
        }
    }
    

    
public function getProductsHome()
{
    $productCount = Product::count(); 
    $genders = Gender::all();
    $productSizes = Size::all();
    $productColors = Color::all();
    $categories = Categorytype::with('category','type')->get();

    // Fetching products with colors, sizes, and a flag indicating whether they are in the wishlist
    $allProducts = Product::select('products.*', DB::raw('(CASE WHEN wishlists.product_id IS NOT NULL THEN true ELSE false END) as in_wishlist'))
                    ->leftJoin('wishlists', 'products.id', '=', 'wishlists.product_id')
                    ->with('color', 'size','category','type')
                    ->paginate(12); 

    return response()->json([
        'products' => $allProducts,
        'genders' => $genders,
        'categories' => $categories,
        'productSizes' => $productSizes,
        'productCount' => $productCount,
        'productColors' => $productColors,
    ]);
}
    
public function getProductsShop()
{
    $productCount = Product::count(); 
    $genders = Gender::all();
    $productSizes = Size::all();
    $productColors = Color::all();
    $categories = Category::all();
    $types = Type::all();

    // Fetching products with colors, sizes, and a flag indicating whether they are in the wishlist
    $allProducts = Product::select('products.*', DB::raw('(CASE WHEN wishlists.product_id IS NOT NULL THEN true ELSE false END) as in_wishlist'))
                    ->leftJoin('wishlists', 'products.id', '=', 'wishlists.product_id')
                    ->with('color', 'size','category','type')
                    ->paginate($productCount); 

    return response()->json([
        'products' => $allProducts,
        'genders' => $genders,
        'categories' => $categories,
        'productSizes' => $productSizes,
        'productCount' => $productCount,
        'types' => $types,
        'productColors' => $productColors,
    ]);
}



public function show($id) {
    $productsizes = Size::all();
    $productcolors = Color::all();
    $product = Product::with('reviews','category','type')->find($id);

    if (!$product) {
        return response()->json(['error' => 'Product not found'], 404);
    }

    $category = Category::find($product->category_id);
    $allProducts = Product::all();
    $count = $allProducts->count();
    $relatedProducts = Product::where('category_id', $category->id)
    ->where('id', '!=', $id)
    ->with('type','category') 
    ->paginate($count);


    // Check if the product is in the wishlist table
    $isInWishlist = Wishlist::where('product_id', $id)->exists();

    return response()->json([
        'product' => $product,
        'allProducts' => $allProducts,
        'related_products' => $relatedProducts,
        'productcolors' => $productcolors,
        'productsizes' => $productsizes,
        'inwishlist' => $isInWishlist, // Include whether the product is in the wishlist
        'reviews' => $product->reviews, // Include the reviews
    ]);
}


}
