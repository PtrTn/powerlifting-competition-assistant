<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Beurt extends Model
{
    protected $table = 'beurten';

    protected $fillable = [
        'lift',
        'beurtnummer',
        'gewicht',
        'gehaald',
    ];
    protected $casts = [
        'gehaald' => 'boolean'
    ];

    public function lifter()
    {
        return $this->belongsTo(Lifter::class, 'lifter_id', 'id');
    }

    public function newCollection(array $models = [])
    {
        return new BeurtenCollection($models);
    }
}
