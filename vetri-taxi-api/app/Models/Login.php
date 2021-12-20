<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    use HasFactory;
    protected $hidden = [
        'password',
    ];
    protected $table = 'login';
    protected $fillable = [
        
        'car_no',
         'password',
         'driver',
              
   ];
}
