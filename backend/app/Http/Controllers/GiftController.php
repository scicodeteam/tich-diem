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
            'ma_khach_hang' => $request->input('ma_khach_hang'),
            'ten_phan_qua' => $request->input('ten_phan_qua'),
            'so_diem_tru' => $request->input('so_diem_tru'),
            'dia_chi_nhan_qua' => $request->input('dia_chi_nhan_qua'),
            'trang_thai' => $request->input('trang_thai'),
        ]);
        $gifts->save();
        return response()->json('Gift created!');
    }
    // public function show($id)
    // {
    //     $contact = Gift::find($id);
    //     return response()->json($contact);
    // }
    public function show($ma_khach_hang)
    {
        $gifts = Gift::all();
        $data = array();
        foreach($gifts as $key => $gift) {
            if ($gift->ma_khach_hang == $ma_khach_hang){
                array_push($data, $gift);
            } 
        }
        return $data;
    }
    public function update(Request $request, $id)
    {
       $gifts = Gift::find($id);
       $gifts->update($request->all());
       return response()->json('Gift updated');
    }
    
    // Delete Gift
    public function destroy($id)
    {
        try {
            $gift = Gift::find($id);
            // Check xem có data không
            if ($gift === null) {
                return response()->json([
                    'status' => false,
                    'message' => 'Gift not found'
                ], 400);
            }
            // Nếu có thì Xóa và trả về object đã xóa
            $gift->delete();
            return response()->json([
                'status' => true,
                'message' => 'Success',
                'data' => $gift
            ], 200);
            
        } catch (Gift $e) {
            return response()->json([
                'status' => false,
                'message' => $e
            ], 500);
        }
    }
}