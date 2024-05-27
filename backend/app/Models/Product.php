<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;
<<<<<<< HEAD
    protected $fillable = ['title','sub_description', 'description', 'price','image', 'stock', 'category_id', 'gender_id','type_id',"seller_id"];
=======
    // protected $fillable = ['name', 'description', 'price', 'stock', 'category_id', 'gender_id'];
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }

    public function color()
    {
        return $this->belongsTo(Color::class);
    }

    public function size()
    {
        return $this->belongsTo(Size::class);
    }

    public function wishlist()
    {
        return $this->hasMany(Wishlist::class);
    }
    public function carts()
    {
        return $this->hasMany(Cart::class);
    }

    public function orderitems()
    {
        return $this->hasMany(Orderitem::class);
    }
<<<<<<< HEAD

    public function seller()
    {
        return $this->belongsTo(Seller::class);
    }
=======
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
}
