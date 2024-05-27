<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
<<<<<<< HEAD
    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'phone',
        'city',
        'address',
    ];
=======
    protected $fillable = ['name', 'email', 'phone', 'address'];
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b

    public function products()
    {
        return $this->hasMany(Product::class);
    }

    public function wishlists()
    {
        return $this->hasMany(Wishlist::class);
    }
<<<<<<< HEAD
    public function user()
    {
        return $this->belongsTo(User::class);
    }
=======
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
}