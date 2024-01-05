# API Tich-diem
#### Bước 1: Cài đặt Laravel
`composer create-project laravel/laravel tichdiem-backend`

#### Bước 2: Cài đặt phpmyadmin

- Cài đặt XAMP `http://localhost/phpmyadmin/`

- Tạo Database tichdiem

- Vào file .env sửa `DB_DATABASE=tichdiem`

#### Bước 3: Create Migration

- Tạo bảng Lịch sử tích điểm `php artisan make:migration create_points_table`

- Chỉnh sửa bảng CSDL points

    ```
    public function up()
    {
        Schema::create('points', function (Blueprint $table) {
            $table->id();
            $table->string('ma_khach_hang');
            $table->string('ten_san_pham');
            $table->string('ma_tich_diem');
            $table->string('so_diem_cong');
            $table->timestamps();
        });
    }
    ```

- Tạo bảng Lịch sử đổi quà `php artisan make:migration create_gifts_table`    

- Chỉnh sửa bảng CSDL gifts
    ```
        public function up()
        {
            Schema::create('gifts', function (Blueprint $table) {
                $table->id();
                $table->string('ma_khach_hang');
                $table->string('ten_phan_qua');
                $table->string('so_diem_tru');
                $table->string('dia_chi_nhan_qua');
                $table->string('trang_thai');
                $table->timestamps();
            });
        }
    ```
- Sửa bảng users
    ```
        public function up()
        {
            Schema::create('users', function (Blueprint $table) {
                $table->id();
                $table->string('ma_khach_hang');
                $table->string('tong_so_diem');
                $table->string('name');
                $table->string('phone');
                $table->string('address');
                $table->string('email')->unique();
                $table->timestamp('email_verified_at')->nullable();
                $table->string('password');
                $table->rememberToken();
                $table->timestamps();
            });
        }
    ```

- Update bảng vào CSDL `php artisan migrate`

#### Bước 4: Create Controller

- Tạo GiftController `php artisan make:controller GiftController`

- Sửa code app/Http/GiftController.php

    ```
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
    ```

- Tạo PointController `php artisan make:controller PointController`

- Sửa code app/Http/PointController.php
    ```
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
    ```


#### Bước 4: Create Models

- Tạo model Point `php artisan make:model Point`

- Sửa file app/Models/Point.php

    ```
        <?php

        namespace App\Models;

        use Illuminate\Database\Eloquent\Factories\HasFactory;
        use Illuminate\Database\Eloquent\Model;

        class Point extends Model
        {
            protected $table = 'points';
            protected $primaryKey = 'id';
            protected $fillable = ['ma_khach_hang', 'ten_san_pham', 'ma_tich_diem', 'so_diem_cong'];

            use HasFactory;
        }
    ```

- Tạo model Gift `php artisan make:model Gift`

- Sửa file app/Models/Gift.php
    ```
    <?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class Gift extends Model
    {
        protected $table = 'gifts';
        protected $primaryKey = 'id';
        protected $fillable = ['ma_khach_hang', 'ten_phan_qua', 'so_diem_tru', 'dia_chi_nhan_qua', 'trang_thai'];
        use HasFactory;
    }
    ```
- Sửa file app/Models/User.php
    ```
    protected $fillable = [
            'ma_khach_hang',
            'tong_so_diem',
            'name',
            'phone',
            'address',
            'email',
            'password',
        ];
    ```
#### Bước 5 Cấu hình Router

    ```
        Route::get('/points',[App\Http\Controllers\PointController::class, 'index']);
        Route::post('/points/save',[App\Http\Controllers\PointController::class, 'store']);
        Route::put('/points/update/{id}',[App\Http\Controllers\PointController::class, 'update']);
        Route::delete('/points/delete/{id}',[App\Http\Controllers\PointController::class, 'destroy']);

        Route::get('/gifts',[App\Http\Controllers\GiftController::class, 'index']);
        Route::post('/gifts/save',[App\Http\Controllers\GiftController::class, 'store']);
        Route::put('/gifts/update/{id}',[App\Http\Controllers\GiftController::class, 'update']);
        Route::delete('/gifts/delete/{id}',[App\Http\Controllers\GiftController::class, 'destroy']);

        Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
            return $request->user();
        });
    ```

#### Bước 6 Xác thực Authentication với Laravel Passport

- Cài đặt `composer require laravel/passport`

- Sau khi cài đặt thành công, mở file config/app.php và thêm service provider:
    `'providers' => [
        Laravel\Passport\PassportServiceProvider::class,
    ],`

- Sau khi đăng ký nhà cung cấp dịch vụ Passport, chúng ta cần sử dụng command để migration, sau khi chạy migrate, bạn sẽ nhận được một số bảng mới trong cơ sở dữ liệu. ta sử dụng lệnh: `php artisan migrate`

- Sử dụng lệnh: passport:install, nó sẽ tạo các khóa mã thông báo để bảo mật. `php artisan passport:install`

#### Bước 7 Cấu hình Passport

Trong bước này, chúng ta phải thực hiện cấu hìnhtrong 3 nơi: model, service provider và file cấu hình auth. Vì vậy, bạn chỉ cần theo dõi thay đổi trên tập tin đó.

    * Trong model, chúng ta đã thêm class HasApiTokens của Passport

    * Trong AuthServiceProvider, chúng ta đã thêm vào Passport::routes()

    * Trong auth.php, chúng ta đã thêm cấu hình API auth.

- Sửa app/Models/User.php  `use Laravel\Passport\HasApiTokens;`

- Sửa app/Providers/AuthServiceProvider.php 

    + Thêm code `use Laravel\Passport\Passport;`

    + Thêm code
        ```
            public function boot() { 
                $this->registerPolicies(); 
                Passport::ignoreRoutes();
            } 
        ```

- Sửa config/auth.php
    ```
    'guards' => [ 
        'web' => [ 
            'driver' => 'session', 
            'provider' => 'users', 
        ], 
        'api' => [ 
            'driver' => 'passport', 
            'provider' => 'users', 
        ], 
    ],
    ```
#### Bước 7 Tạo API Route

    - Sửa routes/api.php

    ```
        Route::post('login', 'App\Http\Controllers\UserController@login');
        Route::post('register', 'App\Http\Controllers\UserController@register');

        Route::group(['middleware' => 'auth:api'], function() {
            Route::get('users', 'App\Http\Controllers\UserController@users');

            Route::get('/gifts',[GiftController::class, 'index']);
            Route::get('/gifts/{id}',[GiftController::class, 'show']);
            Route::post('/gifts/save',[GiftController::class, 'store']);
            Route::put('/gifts/update/{id}',[GiftController::class, 'update']);
            Route::delete('/gifts/delete/{id}',[GiftController::class, 'destroy']);

            Route::get('/points',[PointController::class, 'index']);
            Route::get('/points/{id}',[PointController::class, 'show']);
            Route::post('/points/save',[PointController::class, 'store']);
            Route::put('/points/update/{id}',[PointController::class, 'update']);
            Route::delete('/points/delete/{id}',[PointController::class, 'destroy']);
        });
    ```
