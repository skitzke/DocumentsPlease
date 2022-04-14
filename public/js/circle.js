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

// Shape instantiation
let rulebookCircle = new Circle(815, 670, 38, '#f56');
let approveStampCircle = new Circle(395, 685, 32, '#f56');
let denyStampCircle = new Circle(475, 685, 32, '#f56');

// Draw shape
rulebookCircle.drawShape(context);
approveStampCircle.drawShape(context);
denyStampCircle.drawShape(context);

// Canvas event listener
canvas.addEventListener('click', (event) =>{
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    rulebookCircle.rulebookOnclick(x, y);
    approveStampCircle.approveStampOnclick(x, y);
    denyStampCircle.denyStampOnclick(x, y);
});
