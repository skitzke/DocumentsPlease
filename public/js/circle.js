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
        //context.stroke();
        //context.fill();
        context.closePath();
    }
    mousePosCalculation(xMouse,yMouse){
        return Math.sqrt(( ( xMouse - this.xpoint ) * ( xMouse - this.xpoint ) ) + ( ( yMouse - this.ypoint ) * ( yMouse - this.ypoint )));
    }
    rulebookOnclick(xMouse,yMouse){
        const distance = this.mousePosCalculation(xMouse,yMouse);
        if(distance < this.radius){
            this.showRulebook();
            return true;
        }else{
            return false;
        }
    }

    approveStampOnclick(xMouse,yMouse){
        const distance = this.mousePosCalculation(xMouse,yMouse);
        if(distance < this.radius){
            decision = true;
            if (decision === true){
                return reDraw();
            }
            console.log(decision);
        }else{
            return false;
        }
    }
    denyStampOnclick(xMouse,yMouse){
        const distance = this.mousePosCalculation(xMouse,yMouse);
        if(distance < this.radius){
            decision = false;
            if (decision === false){
                return reDraw();
            }
            console.log(decision);
        }else{
            return false;
        }
    }

    passportOnclick(xMouse,yMouse){
        const distance = this.mousePosCalculation(xMouse,yMouse);
        if(distance < this.radius){
            this.showPassport();
        }
    }
    showRulebook(){
        modalRulebook.style.display = "block";
        modalImg.src="images/RulesInnerBasic.png";
        captionTextRulebook.innerHTML = rulebookImg.alt;
    }
    showPassport(){
        modalPassport.style.display = "block";
        modalImg2.src="images/PassportInnerAntegria7.png";
    }
} // Circle class end

// Shape instantiation
let rulebookCircle = new Circle(815, 670, 38, '#f56');
let approveStampCircle = new Circle(395, 685, 32, '#f56');
let denyStampCircle = new Circle(475, 685, 32, '#f56');
let passportCircle = new Circle(725, 555, 38, '#f56');

// Draw shape
rulebookCircle.drawShape(context);
approveStampCircle.drawShape(context);
denyStampCircle.drawShape(context);
passportCircle.drawShape(context);

// Canvas event listener
canvas.addEventListener('click', (event) =>{
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    rulebookCircle.rulebookOnclick(x, y);
    approveStampCircle.approveStampOnclick(x, y);
    denyStampCircle.denyStampOnclick(x, y);
    passportCircle.passportOnclick(x,y);
});

function reDraw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    rulebookCircle.drawShape(context);
    approveStampCircle.drawShape(context);
    denyStampCircle.drawShape(context);
    drawImage(rulebookImage,785, 635, 60, 70);
    drawImage(approveStamp, 370, 660, 50, 50);
    drawImage(denyStamp, 450, 660, 50, 50);
    drawImage(passportImg, 700, 520, 50, 70);
    imgRandom();
    displayCurrentDate();
    drawNameTag();
}
