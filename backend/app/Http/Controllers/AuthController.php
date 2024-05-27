<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class AuthController extends Controller
{
   
    public function signup(Request $request){
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');

        $user = new User();
        $user->name = $name;
        $user->email = $email;
        $user->password = bcrypt($password);
        $user->save();

        $token = Str::random(60);
        $user->api_token = hash('sha256', $token);
        $user->save();

        return response()->json(['message' => 'User registered successfully', 'user' => $user, 'token' => $token], 201);

    }

    public function signin(Request $request){
     
        $credentials = ['email' => $request->email, 'password' => $request->password];

        User::where('email',$request->email)->get();
        if (!Auth::attempt($credentials)) {
                        return response()->json([
                                'status' => 404,
                                'message' => 'Email or password incorrect',
                            ], 404);
                        } else {

                          $user = User::where('email', $request->email)->first();
                                $token = Str::random(60);
        
                                $user->api_token = hash('sha256', $token);
        
                                if ($user) {
                        return response()->json([
                            'status' => 200,
                            'valid' => true,
                            'user' =>  $user,
                            'token' => $token
                        ], 200);
                    } else {
                            return response()->json([
                                    'status' => 500,
                                    'message' => 'Failed to save token',
                                ], 500);
                            }
                        }
            }

            public function logout(Request $request)
            {
                if ($request->user()) {
                    $request->user()->tokens()->delete();
                }
                return response()->json([], 204);
            }


}
