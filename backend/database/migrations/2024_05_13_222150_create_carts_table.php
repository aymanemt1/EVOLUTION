<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
<<<<<<< HEAD
            $table->foreignId('client_id')->constrained()->onDelete('cascade');
=======
        
>>>>>>> a06c60eaf17ff86a8ac4f04aaa7e06396050765b
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->integer('quantity');
            $table->decimal('price', 10, 2);
            $table->timestamps();
        });
    }

  
    public function down()
    {
        Schema::dropIfExists('carts');
    }
};
