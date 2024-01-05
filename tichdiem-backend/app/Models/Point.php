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