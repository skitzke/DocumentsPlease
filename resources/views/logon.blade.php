<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="{{ URL::asset('css/login.css') }}" />
        <title>Documents please Menu</title>
    </head>
    <body>
    <audio id="divAudio">
        <source src="audio/menusong.mp3" type="audio/mp3">
    </audio>
    <script>
        document.addEventListener('click', musicPlay);
        var vAudio = document.getElementById("divAudio");
        var hasInit = false;
        function playMusic()
        {
            if(!hasInit)
            {
                hasInit = true;
                vAudio.play();
            }
        }
    </script>
        <div class="container">
            <canvas id="menuBackground"></canvas>
            <div class="login-page">
                <div class="form">
                    <form class="login-form" action="{{ route('home') }}" method="GET">
                        <input id="userInput" type="text" name="username" placeholder="username" required/>
                        <input onclick="storeUsername()" type="submit" value="Play">
                        <p class="message">No username? <a href="{{route('home')}}" onclick="cleanLocalStorage()">Play as a guest</a></p>
                    </form>
                </div>
            </div>
        </div>
    </body>
    <script type="text/javascript" src="{{URL::asset('js/app.js')}}"></script>
</html>


