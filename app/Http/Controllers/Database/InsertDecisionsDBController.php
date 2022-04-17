<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;


class InsertDecisionsDBController extends Controller
{
    //Making a function to insert the decision made in the game.
    public function insertDecision($username, $decision)
    {
        //Making an array for the column names.
        $columnName = array('Username', 'Verified');

        //If the table exists insert the given parameters into the database.
        if (Schema::hasColumns('Decision', $columnName)) {
            //Insertion query for the database.
            DB::insert('insert into Decision (Username, Verified) values (?, ?)', [$username, $decision]);
        } //If table does not exist.
        else {
            //Create a table with the given data type and names for the columns.
            Schema::create('Decision', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('Username');
                $table->string('Verified');
            });
            //Then insert it after the table has been created.
            DB::insert('insert into Decision (Username, Verified) values (?, ?)', [$username, $decision]);
        }
    }
}
