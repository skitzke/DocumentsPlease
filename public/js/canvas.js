// Instantiate Canvas and Context variables
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// Global decision variable
let decision = false;

let image = new Image();
let today = new Date();

// Define canvas size
var window_height = 720;
var window_width = 1280;

// Set Canvas size
canvas.height = window_height;
canvas.width = window_width;

// Modal variables
var modalRulebook = document.getElementById("myModalRulebook");
var modalPassport = document.getElementById("myModalPassport");

// Image variables
var rulebookImg = document.getElementById("rulebook");
var passportImg = document.getElementById("passport");
var imgPassport = document.getElementById("imgPassport");
var playerActionsStorageElement = document.getElementById("playerActionStorageElement");
var rulebookImage = document.getElementById("rulebook").getAttribute("src");
var approveStamp = document.getElementById("approveStamp").getAttribute("src");
var denyStamp = document.getElementById("denyStamp").getAttribute("src");
var passportImgTimer = document.getElementById("passport").getAttribute("src");
var gatesImg = document.getElementById("gates").getAttribute("src");
var leverUpImg = document.getElementById("shutterSwitchUp").getAttribute("src");
var leverDownImg = document.getElementById("shutterSwitchDown").getAttribute("src");
var arrowImg = document.getElementById("arrow").getAttribute("src");
var people = ['images/person1.png', 'images/person2.png', 'images/person3.png', 'images/person4.png','images/person5.png','images/person6.png','images/person7.png','images/person8.png'];
var documents = ['images/PassportInnerAntegria1.png', 'images/PassportInnerAntegria2.png', 'PassportInnerAntegria3.png', 'PassportInnerAntegria4.png','PassportInnerAntegria5.png','PassportInnerAntegria6.png','images/PassportInnerAntegria7.png.png']
var playerActions = [];

// Modal image variables
var captionTextRulebook = document.getElementById("captionRulebook");
var captionTextPassport = document.getElementById("captionPassport");
let textPassport = document.getElementById("textPassport");
var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");

//Window onload event listener
window.addEventListener("load", ()=>{
    //Draw name tag
    drawNameTag();

    //Draw current date
    displayCurrentDate();

    //Draw images
    drawImage(rulebookImage,785, 635, 60, 70);
    drawImage(approveStamp, 370, 660, 50, 50);
    drawImage(denyStamp, 450, 660, 50, 50);
    drawImage(leverDownImg, 786, 250, 50, 50);
    drawImage(arrowImg, 850, 250, 70, 70);
    //Draw documents information
    drawDocumentsInformation();

    //Draw the img in the passport
    drawPassportImgInPassport();

    //When the user clicks anywhere outside the modal, close it
    rulebookPassportBackgroundExit();

    //Draw image behind drawn elements
    context.globalCompositeOperation = "destination-over";
    drawImage(gatesImg, 587, 250, 250, 220);
});

//Canvas onclick event listener
canvas.addEventListener('click', (event) =>{
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    rulebookCircle.rulebookOnclick(x, y);
    approveStampCircle.approveStampOnclick(x, y);
    denyStampCircle.denyStampOnclick(x, y);
    passportCircle.passportOnclick(x,y);
    leverCircle.leverOnclick(x,y);
});

//Function that creates and inserts passport information into passport
function drawDocumentsInformation(){
    textPassport.innerText = documentsInfo.shuffleDateOfBirth() + "\n\n" + documentsInfo.shuffleSex() + "\n\n" + documentsInfo.shuffleLocation() + "\n\n" + documentsInfo.shuffleExpiryDate();
}

//Each time approve or deny is pressed, a new passport image gets shuffled from documents.js
function drawPassportImgInPassport(){
    imgPassport.innerHTML = "<img src =" + documentsInfo.shufflePassportImg() + " width = 44%" + " height = 40%>";
}

//Deals with only loading the images when the approve or deny buttons are pressed
function imgRandom() {
    let rand = people[Math.floor(Math.random() * people.length)];
    image.src = rand;
    setTimeout(function (){
        context.drawImage(image, 615, 290, 200, 180);
    }, 700);
}

//Delays passport animation so it doesnt appear too quick
function passportTimer(){
    let passport = new Image();
    passport.src = passportImgTimer;
    setTimeout(function (){
        context.drawImage(passport, 700, 520, 50, 70);
    }, 750);
}

//Draw img method
function drawImage(img, x ,y, w, h) {
    const image = new Image();
    image.src = img;
    image.onload = function(){
        context.drawImage(image, x, y, w, h);
    }
}

//Access local storage to print the username. If storage is empty, display Guest name tag
function drawNameTag(){
    context.font="small-caps 18px Arial";
    context.fillStyle = "#422a1e";
    context.textAlign = "center";
    if(retrieveUsername() != null){
        context.fillText(retrieveUsername(), 1195, 692, 130);
    }else{
        context.fillText("Guest", 1195, 692, 130);
    }
}

//Generate random int within min max range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Displays the modal of the rulebook
function showRulebook(){
    modalRulebook.style.display = "block";
    modalImg.src="images/RulesInnerBasic.png";
    captionTextRulebook.innerHTML = rulebookImg.alt;
}

//Displays the modal of the passport
function showPassport(){
    modalPassport.style.display = "block";
    modalImg2.src="images/PassportInnerAntegria7.png";
    captionTextPassport.innerHTML = passportImg.alt;
}

//When the user clicks anywhere outside the modal, close it
function rulebookPassportBackgroundExit(){
    window.onclick = function(event) {
        if (event.target === modalPassport) {
            modalPassport.style.display = "none";
        }
        else if (event.target === modalRulebook){
            modalRulebook.style.display = "none";
        }
    }
}

//Method to display current date without time
function displayCurrentDate(){
    context.font="bold 16px Arial";
    context.fillStyle = "#422a1e";
    context.textAlign = "center";
    var d = today.getDate();
    var n = today.getMonth()+1;
    var y = today.getFullYear();
    context.fillText((d + "." + n + "." + y), 564, 716, 100);
}

//Method that clears drawn canvas elements
function clearCanvas(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

//Clears Canvas and redraws all the elements
function reDraw(){
    clearCanvas();
    rulebookCircle.drawShape(context);
    approveStampCircle.drawShape(context);
    denyStampCircle.drawShape(context);
    drawImage(rulebookImage,785, 635, 60, 70);
    drawImage(approveStamp, 370, 660, 50, 50);
    drawImage(denyStamp, 450, 660, 50, 50);
    drawImage(leverUpImg, 786, 250, 50, 50);
    imgRandom();
    displayCurrentDate();
    drawNameTag();
    passportTimer();
}

//Specific redraw method for the lever
function reDrawModified(){
    clearCanvas();
    rulebookCircle.drawShape(context);
    approveStampCircle.drawShape(context);
    denyStampCircle.drawShape(context);
    drawImage(rulebookImage,785, 635, 60, 70);
    drawImage(approveStamp, 370, 660, 50, 50);
    drawImage(denyStamp, 450, 660, 50, 50);
    drawImage(leverDownImg, 786, 250, 50, 50);
    drawImage(gatesImg, 587, 250, 250, 220);
    displayCurrentDate();
    drawNameTag();
}

function printLastUserAction(){
    for(var i = 0; i < playerActions.length; i++){
        playerActionsStorageElement.innerHTML = "<p>Person approved: " + playerActions[i] +  "</p>";
    }
}
