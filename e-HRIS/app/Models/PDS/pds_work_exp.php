<?php

namespace App\Models\PDS;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pds_work_exp extends Model
{
    use HasFactory;
    protected $table = 'pds_work_exp';
    protected $guarded = [];
    protected $fillable = [
        'user_id',
        'from',
        'to',
        'position_title',
        'dept_agency_office',
        'monthly_sal',
        'sal_grade',
        'appointment_status',
        'gvt_service',
        'active',

    ];
}
