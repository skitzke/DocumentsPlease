class Documents {
    constructor() {
        this.dateOfBirth = "1997"
        this.sex = ["Male", "Female"];
        this.location = ["Arstotzka", "Kirgistan", "Putinstan"];
        this.expiryDate = "08.02.2022";
    }

    shuffleArray(array){
        let rand = array[Math.floor(Math.random() * array.length)];
        return rand;
    }
    getDateOfBirth(){
        return this.dateOfBirth;
    }

    getSex(){
        return this.shuffleArray(this.sex)
    }

    getLocation(){
        return this.shuffleArray(this.location)
    }

    getExpiryDate(){
        return this.expiryDate;
    }

    shuffleDateOfBirth(){
        return this.dateOfBirth = "19" + getRandomInt(50, 99);
    }

    shuffleExpiryDate(){
        return this.expiryDate = "08." + getRandomInt(1,12) + ".202" + getRandomInt(0,9);
    }
}
let documentsInfo = new Documents();

