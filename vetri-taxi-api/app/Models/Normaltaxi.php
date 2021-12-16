<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Normaltaxi extends Model
{
    use HasFactory;
    protected $table = 'normaltaxi_details';
    protected $fillable = [
        
       'date',
        'car_id',
         'from',
         'to',
         'cus_name',
          'mobile',
           'distance',
            'waiting_hrs',
            'driver_batta',
             'total',
              
   ];
}
