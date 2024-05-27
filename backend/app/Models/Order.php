<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['client_id', 'total_amount', 'status'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
<<<<<<< HEAD
    
    public function delivery()
    {
        return $this->belongsTo(Delivery::class);
    }
=======
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b

    public function items()
    {
        return $this->hasMany(Orderitem::class);
    }
}