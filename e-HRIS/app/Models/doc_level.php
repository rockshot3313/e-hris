<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class doc_level extends Model
{
    use HasFactory;

    protected $connection = 'dsscd85_qrdts';
    protected $table = 'doc_level';
    protected $primaryKey = 'id';
}
