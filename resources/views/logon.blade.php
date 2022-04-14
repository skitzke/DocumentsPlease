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
        <div class="container">
            <canvas id="menuBackground"></canvas>
            <img id="rulebook" src="{{asset('images/RuleBook.png')}}" alt="rulebook">
        </div>
    </body>
    <script type="text/javascript" src="{{URL::asset('js/app.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('js/canvas.js')}}"></script>
</html>


