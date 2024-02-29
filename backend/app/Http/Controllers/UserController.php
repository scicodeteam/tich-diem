<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request; 
use Illuminate\Support\Facades\Auth; 
use Validator;
use App\Models\User;
use Illuminate\Support\Facades\Validator as FacadesValidator;

class UserController extends Controller 

{
public $successStatus = 200;
    /** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function login(){ 
        if(Auth::attempt(['email' => request('email'), 'password' => request('password')])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')-> accessToken; 
            return response()->json(['success' => $success], $this-> successStatus); 
        } 
        else{ 
            return response()->json(['error'=>'Unauthorised'], 401); 
        } 
    }
    /** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function register(Request $request) 
    { 
        $validator = Validator::make($request->all(), [ 
            'name' => 'required', 
            'phone' => 'required', 
            'address' => 'required', 
            'ma_khach_hang' => 'required', 
            'tong_so_diem' => 'required', 
            'email' => 'required|email', 
            'password' => 'required', 
            'c_password' => 'required|same:password', 
        ]);
        if ($validator->fails()) { 
            return response()->json(['error'=>$validator->errors()], 401);            
        }
        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input); 
        $success['token'] =  $user->createToken('MyApp')-> accessToken; 
        return response()->json(['success'=>$success], $this-> successStatus); 
    }
    /** 
     * users api 
     * 
     * @return \Illuminate\Http\Response 
     */ 
    public function users() 
    { 
        $user = Auth::user(); 
        return response()->json(['success' => $user], $this-> successStatus); 
    } 
 
    public function update(Request $request)
    {
        try {
            $userCode = $request->query('ma_khach_hang');
            $input = $request->all();
            $user = User::where('ma_khach_hang',$userCode)->first();
            if ($user === null || !$user) {
                return response()->json([
                    'status' => false,
                    'message' => 'User not found',
                ], 400);
            
            }
            $user->update($input);
            
            return response()->json([
                'status' => true,
                'message' => 'Success',
                'data' => $user
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e
            ], 500);
        }
    }
    public function resetPassword(Request $request)
    {
        try {
            $validator = FacadesValidator::make($request->all(), [
                'id' => 'required',
                'password' => 'required',
                'c_password' => 'required|same:password',
            ]);
            if ($validator->fails()) {
                return response()->json(['status' => false, 'error' => $validator->errors()], 401);
            }
            $input = $request->all();
            $user = User::find($input['id']);
            if (!$user) {
                return response()->json([
                    'status' => false,
                    'message' => 'User not found',
                ], 400);
            }
            $input['password'] = bcrypt($input['password']);
            $user->update($input);
            return response()->json([
                'status' => true,
                'message' => 'Success',
                'data' => $user
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'status' => false,
                'message' => $e
            ], 500);
        }
    }
}