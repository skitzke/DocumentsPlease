// A class made for the gates
class Gates {
    constructor() {
        this.gatesOpen = false;
        this.leverPosition = "down";
    }

    // Gets the gate boolean from the constructor
    getGatesState(){
        return this.gatesOpen;
    }

    // Gets the lever position string from the constructor
    getLeverPosition(){
        return this.leverPosition;
    }

    // Sets the gate state with a parameter
    setGatesState(state){
        this.gatesOpen = state;
    }

    // Sets the lever position with a string parameter
    setLeverPosition(position){
        this.leverPosition = position;
    }

    // A method which according to the state, either opens the gate and switches the lever up or closes the gate and switches the lever down
    changeGateStatus(){
        if(!this.getGatesState()){
            this.setGatesState(true);
            this.setLeverPosition("up");
            playerActions.push(gates.getGatesState());
            reDraw();
            console.log("Gate state: " + this.getGatesState());
            console.log("Lever position: " + this.getLeverPosition());
        }else{
            this.setGatesState(false);
            this.setLeverPosition("down");
            playerActions.push(gates.getGatesState());
            reDrawModified();
            console.log("Gate state: " + this.getGatesState());
            console.log("Lever position: " + this.getLeverPosition());
        }
    }
}

// Instantiating the class
let gates = new Gates();

