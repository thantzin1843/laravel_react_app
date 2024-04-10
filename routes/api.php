<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\ProductController;
// for authentication
Route::post('signup',[ApiController::class,'signup']);
Route::post('login',[ApiController::class,'login']);

// for product crud
Route::get('products',[ProductController::class,'index']);
Route::post('products',[ProductController::class,'store']);
Route::get('product/{id}',[ProductController::class,'show']);
Route::post('productupdate/{id}',[ProductController::class,'update']);
Route::get('product/delete/{id}',[ProductController::class,'destroy']);