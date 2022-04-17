<?php

namespace App\Http\Controllers;
use function view;

class PostController extends \App\Http\Controllers\Controller
{
    public function getHomePost()
    {
        return view('home');
    }
}
