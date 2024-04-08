<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\SignupRequest;

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
}
