// Global decision variable
let decision = false;

// Instantiate Canvas Settings variables
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

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

// Modal var
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var captionText = document.getElementById("caption");
var modalImg = document.getElementById("img01");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Circle shape class
class Circle{
    constructor(xPoint, yPoint, radius, color) {
        this.xpoint = xPoint;
        this.ypoint = yPoint;
        this.radius = radius;
        this.color = color;
    }
    // Circle shape style
    drawShape(context){
        context.beginPath()
        context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        context.fillStyle = this.color;
        context.stroke();
        context.fill();
        context.closePath();
    }
    mousePosCalculation(xMouse,yMouse){
       return Math.sqrt(( ( xMouse - this.xpoint ) * ( xMouse - this.xpoint ) ) + ( ( yMouse - this.ypoint ) * ( yMouse - this.ypoint )));
    }

    rulebookOnclick(xMouse,yMouse){
        const distance = this.mousePosCalculation(xMouse,yMouse);
        if(distance < this.radius){
            this.showModal();
            return true;
        }else{
            return false;
        }
    }
    approveStampOnclick(xMouse,yMouse){
        const distance = this.mousePosCalculation(xMouse,yMouse);
        if(distance < this.radius){
            decision = true;
            console.log(decision);
            return true;
        }else{
            return false;
        }
    }
    denyStampOnclick(xMouse,yMouse){
        const distance = this.mousePosCalculation(xMouse,yMouse);
        if(distance < this.radius){
            decision = false;
            console.log(decision);
            return true;
        }else{
            return false;
        }
    }

    showModal(){
        modal.style.display = "block";
        modalImg.src="images/RulesInnerBasic.png";
        captionText.innerHTML = rulebookImg .alt;
    }
} // Circle class end

// Canvas event listener
canvas.addEventListener('click', (event) =>{
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    rulebookCircle.rulebookOnclick(x, y);
    approveStampCircle.approveStampOnclick(x, y);
    denyStampCircle.denyStampOnclick(x, y);
});

//Draw img method
function drawImage(img, x ,y, w, h) {
    const image = new Image();
    image.src = img;
    image.onload = function(){
        context.drawImage(image, x, y, w, h);
    }
}

// Shape instantiation
let rulebookCircle = new Circle(815, 670, 38, '#f56');
let approveStampCircle = new Circle(370, 660, 38, '#f56');
let denyStampCircle = new Circle(455, 660, 38, '#f56');

// Draw shape
rulebookCircle.drawShape(context);
approveStampCircle.drawShape(context);
denyStampCircle.drawShape(context);

// Draw image
drawImage(rulebookImage,785, 635, 60, 70);
drawImage(approveStamp, 370, 660, 50, 50);
drawImage(denyStamp, 450, 660, 50, 50);























