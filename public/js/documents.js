class Documents {
    constructor() {
        this.dateOfBirth = "1999";
        this.sex = ["Male", "Female"];
        this.location = ["Arstotzka", "Kirgistan", "Putinstan", "Bardiboghapu", "Slandingof", "Marsaint Newthe", "Svalslone", "United Ihrain", "Keelingdan"];
        this.expiryDate = "31.12.2029";
    }

    getDateOfBirth(){
        return this.dateOfBirth;
    }

    getSex(){
        return this.sex;
    }

    getLocation(){
        return this.location;
    }

    getExpiryDate(){
        return this.expiryDate;
    }

    shuffleDateOfBirth(){
        return this.dateOfBirth = getRandomInt(1,30) + "." + getRandomInt(1,12) + ".19" + getRandomInt(50,99);
    }

    shuffleSex(){
        return this.shuffleArray(this.getSex());
    }

    shuffleLocation(){
        return this.shuffleArray(this.getLocation())
    }

    shuffleExpiryDate(){
        return this.expiryDate = getRandomInt(1,30) + "." + getRandomInt(1,12) + ".202" + getRandomInt(0,9);
    }

    //Returns a random number in the range of the array's length
    shuffleArray(array){
        let rand = array[Math.floor(Math.random() * array.length)];
        return rand;
    }
}
let documentsInfo = new Documents();
