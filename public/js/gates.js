class Gates {
    constructor() {
        this.gatesOpen = false;
        this.leverPosition = "down";
    }
    getGatesState(){
        return this.gatesOpen;
    }
    getLeverPosition(){
        return this.leverPosition;
    }
    setGatesState(state){
        this.gatesOpen = state;
    }
    setLeverPosition(position){
        this.leverPosition = position;
    }
    changeGateStatus(){
        if(!gates.getGatesState()){
            gates.setGatesState(true);
            gates.setLeverPosition("up")
            reDraw();
            console.log("Gate state: " + gates.getGatesState());
            console.log("Lever position: " + gates.getLeverPosition());
        }else{
            gates.setGatesState(false);
            gates.setLeverPosition("down")
            reDrawModified();
            imgRandom();
            console.log("Gate state: " + gates.getGatesState());
            console.log("Lever position: " + gates.getLeverPosition());
        }
    }
}
let gates = new Gates();

