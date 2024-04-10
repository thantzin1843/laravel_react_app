<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Hash;

class ApiController extends Controller
{
    public function signup(SignupRequest $request){
        $data = $request->validated();
        User::create($data);
        return response()->json([
            'message'=>"User created",
            'token'=>'tzw'
        ],200);
    }

    public function login(LoginRequest $request){
        $data = $request->validated();
        $user = User::where('email',$data['email'])->first();

        if(isset($user->email)){
            if(Hash::check($data['password'],$user->password)){
                return response()->json([
                    'message'=>'Login success',
                    'token'=>'tzw'
                ],200);
            }else{
                return response()->json([
                    'message'=>'Wrong Password',
                ]);
            }
        }else{
            return response()->json([
                'message'=>'Invalid credential',
                
            ]);
        }
        
        
        
    }
}
