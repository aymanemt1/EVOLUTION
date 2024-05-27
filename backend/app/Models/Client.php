<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = ['name', 'email', 'phone', 'address'];

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function wishlists()
    {
        return $this->hasMany(Wishlist::class);
    }
}