<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="{{ URL::asset('css/login.css') }}" />
        <link rel="icon" href="images/icon.jpg">
        <title>Documents please Menu</title>
    </head>
    <body>
        <div class="container">
            <canvas id="menuBackground" onclick="menuAudio()"></canvas>
            <div class="login-page">
                <div class="form">
                    <form enctype='multipart/form-data' class="login-form" method="GET">
                        <input id="userInput" type="text" name="username" placeholder="username" required/>
                        <input onclick="storeUsername()"name="submit" type="submit" value="Play">
                        <?php
                        use App\Http\Controllers\Database;
                        if(isset($_GET["submit"])){
                            $username = $_GET['username'];
                            $var = new Database\ProxyInsertDatabaseController();
                            $var->constructor($username, "yes");
                            return redirect()->to('home')->send();
                        }
                        ?>

                        <p class="message">No username? <a href="{{route('home')}}" onclick="cleanLocalStorage()">Play as a guest</a></p>
                    </form>
                </div>
            </div>
        </div>
    </body>
    <script type="text/javascript" src="{{URL::asset('js/app.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('js/audio.js')}}"></script>
</html>


