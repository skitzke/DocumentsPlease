<?php

namespace App\Http\Controllers\Database;

use Illuminate\Support\Facades\DB;
use Symfony\Component\Console\Input\Input;

class ReadDBController
{
    private function selectDecisions()
    {
        $DataFromDatabase = DB::select('SELECT Username, Verified, Jail FROM decision');
        foreach ($DataFromDatabase as $DFDB)
            {
                return $DFDB;
            }
//        $users = DB::table('decision')->select('Username', 'Verified', 'Jail');
//        echo $users;
    }

    public function selectDecisionProxy()
    {
        return $this->selectDecisions();
    }
}