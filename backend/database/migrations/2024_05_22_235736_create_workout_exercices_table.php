<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('workout_exercices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('workout_id')->constrained();
            $table->foreignId('exercice_work_out_api_id')->constrained('exercice_work_out_apis');
            $table->integer('repetition')->nullable();
            $table->integer('duration')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('workout_exercices');
    }
};
