<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}" />
        <title>Documents please</title>
    </head>
    <body>
    <div class="container">
        <div id="game">
            <div id="myModal" class="modal">
                <span class="close">&times;</span>
                <img class="modal-content" id="img01">
                <div id="caption"></div>
            </div>

            <img id="rulebook" src="{{asset('images/RuleBook.png')}}" alt="rulebook">
            <img id="approveStamp" src="{{asset('images/StampBotApproved.png')}}" alt="approve stamp">
            <img id="denyStamp" src="{{asset('images/StampBotDenied.png')}}" alt="deny stamp">
            <img id="rulebookOpen" src="{{asset('images/RulesInnerBasic.png')}}" alt="rulebook basics">
        </div>
    </div>
    </body>
    <script type="text/javascript" src="{{URL::asset('js/app.js')}}"></script>
</html>

