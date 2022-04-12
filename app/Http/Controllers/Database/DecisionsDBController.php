<?php

namespace App\Http\Controllers\Database;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;


class DecisionsDBController
{
    //Making a function to insert the decision made in the game.
    public function insertDecision($decision, $jail)
    {
        //Making an array for the column names.
        $columnName = array('decision', 'jail');

        //If the table exists insert the given parameters into the database.
        if (Schema::hasColumns('DocumentsPlease', $columnName))
        {
            //Insertion query for the database.
            DB::insert('insert into DocumentsPlease (decision, jail) values (?, ?)', [$decision, $jail]);
        }
        //If table does not exist.
        else
        {
            //Create a table with the given data type and names for the columns.
            Schema::create('DocumentsPlease', function(Blueprint $table){
                $table->bigIncrements('id');
                $table->string('decision');
                $table->string('jail');
            });
            //Then insert it after the table has been created.
            DB::insert('insert into DocumentsPlease (decision, jail) values (?, ?)', [$decision, $jail]);
        }
    }
}
