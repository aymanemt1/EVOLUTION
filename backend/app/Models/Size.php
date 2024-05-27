<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Size extends Model
{
<<<<<<< HEAD
    use HasFactory;
=======
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
    protected $fillable = ['name'];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}