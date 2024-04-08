<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return response()->json([
            'products'=>$products
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductRequest $request)
    {
        
        Product::create([
            'name'=>$request->name,
            'image'=>$request->image,
            'description'=>$request->description,
        ]);
        return response()->json([
            'message'=>'Inserted successfully'
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::where('id',$id)->get();
        return response()->json([
            'product'=>$product,
            'message'=>'Retrieve success'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductRequest $request)
    {
        Product::where('id',11)->update([
            'name'=>$request->name,
            'image'=>$request->image,
            'description'=>$request->description,
        ]);
        return response()->json([
            'message'=>'Updated successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Product::where('id',$id)->delete();
        return response()->json([
            'message'=>"Deleted successfully!"
        ]);
    }
}
