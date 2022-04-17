class Documents {
    constructor() {
        this.dateOfBirth = "1999";
        this.sex = ["Male", "Female"];
        this.location = ["Arstotzka", "Kirgistan", "Putinstan", "Bardiboghapu", "Slandingof", "Marsaint Newthe", "Svalslone", "United Ihrain", "Keelingdan"];
        this.expiryDate = "31.12.2029";
        this.passportImg = ['images/person1.png', 'images/person2.png', 'images/person3.png', 'images/person4.png','images/person5.png','images/person6.png','images/person7.png','images/person8.png'];
    }

    // Gets the date of birth from the constructor
    getDateOfBirth(){
        return this.dateOfBirth;
    }

    // Gets the sex from the constructor
    getSex(){
        return this.sex;
    }

    // Gets the location from the constructor
    getLocation(){
        return this.location;
    }

    // Gets the expiry date from the constructor
    getExpiryDate(){
        return this.expiryDate;
    }

    // Gets the passport images from the constructor
    getPassportImg(){
        return this.passportImg;
    }

    // Shuffles the date of birth numbers so that it is always random when the method is called
    shuffleDateOfBirth(){
        return this.dateOfBirth = getRandomInt(1,30) + "." + getRandomInt(1,12) + ".19" + getRandomInt(50,99);
    }

    // Shuffles the sex so that it is always random when the method is called
    shuffleSex(){
        return this.shuffleArray(this.getSex());
    }

    // Shuffles the location so that it is always random when the method is called
    shuffleLocation(){
        return this.shuffleArray(this.getLocation())
    }

    // Shuffles the expiry date numbers so that it is always random when the method is called
    shuffleExpiryDate(){
        return this.expiryDate = getRandomInt(1,30) + "." + getRandomInt(1,12) + ".202" + getRandomInt(0,9);
    }

    //Returns a random number in the range of the array's length
    shuffleArray(array){
        let rand = array[Math.floor(Math.random() * array.length)];
        return rand;
    }

    // Shuffles the passport images so that each image shown in the passport is different
    shufflePassportImg(){
        return this.shuffleArray(this.getPassportImg());
    }
}

// Instantiation of the class
let documentsInfo = new Documents();
