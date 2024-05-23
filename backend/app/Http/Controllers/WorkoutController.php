<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use App\Models\WorkoutExercice;
use Illuminate\Http\Request;

class WorkoutController extends Controller
{
    public function index()
    {
        $workouts = Workout::with(['level', 'workoutExercices.exerciceWorkOutApi'])->get();
        return response()->json($workouts);
    }

    public function show($id)
    {
        $workout = Workout::with(['level', 'workoutExercices.exerciceWorkOutApi'])->find($id);
        if (!$workout) {
            return response()->json(['message' => 'Workout not found'], 404);
        }
        return response()->json($workout);
    }

    public function updateWorkoutDone($id, Request $request)
    {
        $workout = Workout::find($id);
        if (!$workout) {
            return response()->json(['message' => 'Workout not found'], 404);
        }
        $workout->done = $request->done;
        $workout->save();

        return response()->json($workout);
    }

    public function updateExerciseDone($id, Request $request)
    {
        $exercise = WorkoutExercice::find($id);
        if (!$exercise) {
            return response()->json(['message' => 'Workout exercise not found'], 404);
        }
        $exercise->done = $request->done;
        $exercise->save();

        // Recalculate the workout's done status
        $workout = $exercise->workout;
        $allDone = $workout->workoutExercices->every(function ($ex) {
            return $ex->done;
        });

        $workout->done = $allDone;
        $workout->save();

        return response()->json($exercise);
    }
}
