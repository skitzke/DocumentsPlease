// Global decision variable
let decision = false;

// Instantiate Canvas Settings variables
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let image = new Image();
let today = new Date();

// Define canvas size
var window_height = 720;
var window_width = 1280;

// Set Canvas size
canvas.height = window_height;
canvas.width = window_width;

// Image variables
var rulebookImg = document.getElementById("rulebook")
var rulebookImage = document.getElementById("rulebook").getAttribute("src");
var approveStamp = document.getElementById("approveStamp").getAttribute("src");
var denyStamp = document.getElementById("denyStamp").getAttribute("src");
var passportImg = document.getElementById("passport").getAttribute("src");
var people = ['images/person1.png', 'images/person2.png', 'images/person3.png', 'images/person4.png','images/person5.png','images/person6.png','images/person7.png','images/person8.png'];
var documents = ['images/PassportInnerAntegria1.png', 'images/PassportInnerAntegria2.png', 'PassportInnerAntegria3.png', 'PassportInnerAntegria4.png','PassportInnerAntegria5.png','PassportInnerAntegria6.png','images/PassportInnerAntegria7.png.png'];

//This loads the first image when the page is loaded
image.src = people[1];
image.onload = function (){
    setTimeout(function (){
        context.drawImage(image, 615, 290, 200, 180);
    }, 800);
    displayCurrentDate();
    drawNameTag();
}

//Deals with only loading the images when the approve or deny buttons are pressed
function imgRandom() {
    let rand = people[Math.floor(Math.random() * people.length)];
    image = new Image();
    image.src = rand;
    setTimeout(function (){
        context.drawImage(image, 615, 290, 200, 180);
    }, 800);
}

// Modal var
var modalRulebook = document.getElementById("myModalRulebook");
var modalPassport = document.getElementById("myModalPassport");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var captionTextRulebook = document.getElementById("caption");
var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");

// Get the <span> element that closes the modal
var spanRulebook = document.getElementsByClassName("close")[0];
var spanPassport = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
spanRulebook.onclick = function() {
    modalRulebook.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
spanPassport.onclick = function() {
    modalPassport.style.display = "none";
}

//Draw img method
function drawImage(img, x ,y, w, h) {
    const image = new Image();
    image.src = img;
    image.onload = function(){
        context.drawImage(image, x, y, w, h);
    }
}

//Access local storage to print the username. If storage is empty, display Guest**** name tag
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

// Method to display current date without time
function displayCurrentDate(){
    context.font="bold 16px Arial";
    context.fillStyle = "#422a1e";
    context.textAlign = "center";
    var d = today.getDate();
    var n = today.getMonth()+1;
    var y = today.getFullYear();
    context.fillText((d + "." + n + "." + y), 564, 716, 100);
}

//Draw name tag
drawNameTag();

// Draw image
drawImage(rulebookImage,785, 635, 60, 70);
drawImage(approveStamp, 370, 660, 50, 50);
drawImage(denyStamp, 450, 660, 50, 50);
drawImage(passportImg, 700, 520, 50, 70);

























