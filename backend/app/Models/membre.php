<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class membre extends Model
{
    use HasFactory;
    protected $fillable = ['username', 'fullname', 'email', 'password'];

    public function member()
    {
        return $this->belongsTo(membre::class, 'membre_id');
    }
}
