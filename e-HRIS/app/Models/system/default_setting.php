<?php

namespace App\Models\system;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class default_setting extends Model
{
    use HasFactory;
    protected $connection = 'e-hris';
    protected $table = 'default_setting';
    protected $primaryKey = 'id';

    protected $fillable = [
        'key',
        'value',
        'description',
        'link',
        'image',
        'active',
        'created_by'
    ];
}
