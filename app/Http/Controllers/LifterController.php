<?php

namespace App\Http\Controllers;

use App\Lifter;

class LifterController extends Controller
{
    public function showLifters()
    {
        $lifters = Lifter::all();
        
        return View(
            'lifters',
            [
                'lifters' => $lifters
            ]
        );
    }

    public function deleteLifter(Lifter $lifter)
    {
        $lifter->delete();
        return redirect()->back();
    }
}
