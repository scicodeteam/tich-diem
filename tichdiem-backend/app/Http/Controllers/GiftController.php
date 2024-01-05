<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Gift;

class GiftController extends Controller
{  
    public function index()
    {
        $gifts = Gift::all();
        return response()->json($gifts); 
    }   
    public function store(Request $request)
    {
        $gifts = new Gift([
            'name' => $request->input('name'),
            'address' => $request->input('address'),
            'mobile' => $request->input('mobile'),
        ]);
        $gifts->save();
        return response()->json('Gift created!');
    }
    public function show($id)
    {
        $contact = Gift::find($id);
        return response()->json($contact);
    }
    public function update(Request $request, $id)
    {
       $gifts = Gift::find($id);
       $gifts->update($request->all());
       return response()->json('Gift updated');
    }
    public function destroy($id)
    {
        $gifts = Gift::find($id);
        $gifts->delete();
        return response()->json(' deleted!');
    }
}