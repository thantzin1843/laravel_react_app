<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;
use Illuminate\Support\Facades\Storage;

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
        try{
            $imageName = Str::random(32).".".$request->image->getClientOriginalExtension();
            Product::create([
                'name'=>$request->name,
                'image'=>$imageName,
                'description'=>$request->description,
            ]);
            // store image in storge
            Storage::disk('public')->put($imageName,file_get_contents($request->image));
            return response()->json([
                'message'=>'Inserted successfully'
            ],200);

        }catch(e){
            return response()->json([
                'message' => "Something went really wrong!"
            ],500);
        }
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
