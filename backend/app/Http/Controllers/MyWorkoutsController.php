<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\my_workouts;

class MyWorkoutsController extends Controller
{
    public function index($id)
    {
        $workouts = my_workouts::where('membre_id', $id)->get();
        return response()->json($workouts);
    }
}
