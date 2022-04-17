// Circle shape class
class Circle{
    constructor(xPoint, yPoint, radius, color) {
        this.xpoint = xPoint;
        this.ypoint = yPoint;
        this.radius = radius;
        this.color = color;
    }

    // Circle shape size, width, color
    drawShape(context){
        context.beginPath()
        context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = 'black';
        context.lineWidth = 1;
        context.fillStyle = this.color;
        context.closePath();
    }

    // To calculate the mouse position according to the drawn circles for the models
    mousePosCalculation(xMouse,yMouse){
        return Math.sqrt(( ( xMouse - this.xpoint ) * ( xMouse - this.xpoint ) ) + ( ( yMouse - this.ypoint ) * ( yMouse - this.ypoint )));
    }

    // When rulebook is clicked function
    rulebookOnclick(xMouse,yMouse){
        const distance = this.mousePosCalculation(xMouse,yMouse);
        if(distance < this.radius){
            showRulebook();
        }else{
            return false;
        }
    }

    // When approve stamp is clicked function
    approveStampOnclick(xMouse,yMouse){
        const distance = this.mousePosCalculation(xMouse,yMouse);
        if(distance < this.radius){
            decision = true;
            drawDocumentsInformation();
            drawPassportImgInPassport();
            return reDraw() + console.log(decision);
        }else{
            return false;
        }
    }

    // When deny stamp is clicked function
    denyStampOnclick(xMouse,yMouse){
        const distance = this.mousePosCalculation(xMouse,yMouse);
        if(distance < this.radius){
            decision = false;
            drawDocumentsInformation();
            drawPassportImgInPassport();
            return reDraw() + console.log(decision);
        }else{
            return false;
        }
    }

    // When passport is clicked function
    passportOnclick(xMouse,yMouse){
        const distance = this.mousePosCalculation(xMouse,yMouse);
        if(distance < this.radius){
            showPassport();
        }
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
