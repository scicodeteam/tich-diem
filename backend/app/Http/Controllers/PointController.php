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
    // public function show($id)
    // {
    //     $contact = Point::find($id);
    //     return response()->json($contact);
    // }
    public function show($ma_khach_hang)
    {
        $points = Point::all();
        $data = array();
        foreach($points as $key => $point) {
            if ($point->ma_khach_hang == $ma_khach_hang){
                array_push($data, $point);
            } 
        }
        return $data;
    }
    public function update(Request $request, $id)
    {
       $points = Point::find($id);
       $points->update($request->all());
       return response()->json('Point updated');
    }

    // Delete Point
    public function destroy($id)
    {
        try {
            $point = Point::find($id);
            // Check xem có data không
            if ($point === null) {
                return response()->json([
                    'status' => false,
                    'message' => 'Point not found'
                ], 400);
            }
            // Nếu có thì Xóa và trả về object đã xóa
            $point->delete();
            return response()->json([
                'status' => true,
                'message' => 'Success',
                'data' => $point
            ], 200);
            
        } catch (Point $e) {
            return response()->json([
                'status' => false,
                'message' => $e
            ], 500);
        }
    }
}