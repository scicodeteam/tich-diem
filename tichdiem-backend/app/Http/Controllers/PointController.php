<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Point;

class PointController extends Controller
{  
    public function index()
    {
        $points = Point::all();
        return response()->json($points); 
    }   
    public function store(Request $request)
    {
        $points = new Point([
            'ma_khach_hang' => $request->input('ma_khach_hang'),
            'ten_san_pham' => $request->input('ten_san_pham'),
            'ma_tich_diem' => $request->input('ma_tich_diem'),
            'so_diem_cong' => $request->input('so_diem_cong'),
        ]);
        $points->save();
        return response()->json('Point created!');
    }
    public function show($id)
    {
        $contact = Point::find($id);
        return response()->json($contact);
    }
    public function update(Request $request, $id)
    {
       $points = Point::find($id);
       $points->update($request->all());
       return response()->json('Point updated');
    }
    public function destroy($id)
    {
        $points = Point::find($id);
        $points->delete();
        return response()->json(' deleted!');
    }
}