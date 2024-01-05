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
