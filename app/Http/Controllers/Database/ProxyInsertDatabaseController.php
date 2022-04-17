<?php

namespace App\Http\Controllers\Database;
include 'InsertDecisionsDBController.php';

class ProxyInsertDatabaseController extends InsertDecisionsDBController
{
    public function constructor($username, $decision){
        $this->insertDecision($username, $decision);
        return redirect()->route('home');
    }
}


