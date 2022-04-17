<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ReadDBController extends Controller
{
    public function selectDecisionProxy()
    {
        return $this->selectDecisions();
    }

    private function selectDecisions()
    {
        $DataFromDatabase = DB::select('SELECT Username, Verified, Jail FROM decision');
        foreach ($DataFromDatabase as $DFDB) {
            return $DFDB;
        }
//        $users = DB::table('decision')->select('Username', 'Verified', 'Jail');
//        echo $users;
    }
}
