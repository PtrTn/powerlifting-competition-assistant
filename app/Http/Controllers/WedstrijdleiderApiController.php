<?php

namespace App\Http\Controllers;

use App\Lifter;
use Illuminate\Http\Request;

class WedstrijdleiderApiController extends Controller
{
    public function updateLifter(Request $request)
    {
        $id = $request->request->get('pk');
        $name = $request->request->get('name');
        $value = $request->request->get('value');

        /** @var Lifter|null $lifter */
        $lifter = Lifter::find($id);

        if(!isset($id, $name, $value, $lifter)) {
            return response()->json([], 400);
        }

        $whitelist = $lifter->getFillable();
        if (!in_array($name, $whitelist)) {
            return response()->json([], 400);
        }

        $lifter->$name = $value;
        $lifter->save();

        return response()->json([]);
    }
}