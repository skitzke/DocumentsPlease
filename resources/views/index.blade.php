<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}" />
        <link rel="icon" href="images/icon.jpg">
        <title>Documents please</title>
    </head>
    <body>
        <div class="container">
        <div id="demo"></div>
        <canvas id="canvas" onclick="gameAudio()"></canvas>

        <div id="myModalRulebook" class="modal">
            <img class="modal-content" id="img01">
            <div id="captionRulebook"></div>
        </div>
            <div id="myModalPassport" class="modal">
            <div id="modalImgContainer">
                <img class="modal-content" id="img02">
                <div id="textPassport"></div>
                <div id="imgPassport"></div>
            </div>

            <div id="captionPassport"></div>
        </div>

        <img class="image" id="rulebook" src="{{asset('images/RuleBook.png')}}" alt="rulebook">
        <img class="image" id="rulebookOpen" src="{{asset('images/RulesInnerBasic.png')}}" alt="rulebook basics">
        <img class="image" id="approveStamp" src="{{asset('images/StampBotApproved.png')}}" alt="approve stamp">
        <img class="image" id="denyStamp" src="{{asset('images/StampBotDenied.png')}}" alt="deny stamp">
        <img class="image" id="passport" src="{{asset('images/passport.jpg')}}" alt="passport">
        <img class="image" id="gates" src="{{asset('images/Shutter.png')}}" alt="gates">
        <img class="image" id="shutterSwitchUp" src="{{asset('images/ShutterSwitchUp.png')}}" alt="lever">
        <img class="image" id="shutterSwitchDown" src="{{asset('images/ShutterSwitchDown.png')}}" alt="lever">
        </div>
    </body>
    <script type="text/javascript" src="{{URL::asset('js/app.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('js/canvas.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('js/circle.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('js/documents.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('js/audio.js')}}"></script>
    <script type="text/javascript" src="{{URL::asset('js/gates.js')}}"></script>
</html>


