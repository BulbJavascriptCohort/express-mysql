const axios  = require("axios")

// OOP 
// transport ==> (car, bus, motorcycle, bicycle, airplane, boat)

// color ==> (blue, red, indigo)


// class === object
//
class CoinDeskAPI {

    // initialise the class
    constructor(){
        this.apiURL = "https://api.coindesk.com/v1/bpi/historical/close.json"
    }

    formatDate(date){
        const d = new Date(date);
        let month = `${d.getMonth() + 1}` 
        let day = `${d.getDay()}`
        let year = `${d.getFullYear()}`
        
        if ( month.length < 2 ) month = `0${month}`
        if ( day.length < 2 ) month = `0${day}`

        return [year, month, day].join("-")
    }


    async fetch(){
        const today = new Date();

        const end  = this.formatDate(today);
        const start  = this.formatDate(today.setFullYear(today.getFullYear() - 3))
        const url = `${this.apiURL}?start=${start}&end=${end}`
        const response =  await axios.get(url)
        
        return response.data;
    }
}

module.exports = {
    CoinDeskAPI
}

// idea => object
// food ==> bread/beans, pizza, etc

class Rectangle {
    constructor(height, width) {
      this.h = height;
      this.w = width;
    }
}

let r1 = new Rectangle(4, 7);
console.log(r1)
// r1 is an object/instance of the class rectangle
  


class HumanBeing{
    // initialise the class
    // class variable // instance variable
    constructor(gender, race, height, weight, name){
        this.g = gender;
        this.r = race;
        this.h = height;
        this.w = weight;
        this.n = name;
    }

    eat(){
        console.log(`This is the value of g : ${this.g}`)
        // console.log(`This is the value of k : ${k}`)
    }

    talk(){

    }

    jump(){
        console.log("")
    }

}

const Fatimah = new HumanBeing("Female", "Black", "6.2", "50", "Fatimah");
Fatimah.eat()
const Segun = new HumanBeing("Male", "Black", "8.2", "90", "Segun");
const Messi = new HumanBeing("Male", "White", "7.2", "130", "Messi");

console.log(Fatimah)
console.log(Segun)

class Vehicle{
    constructor(numberOfWheel, color, isEngine){
        this.wheel = numberOfWheel
        this.color = color
        this.engine  = isEngine
    }
}

const bicycle = new Vehicle(2, "blue", false)
const okada = new Vehicle(2, "blue", true)
const motor = new Vehicle(4, "red", true)
const truck = new Vehicle(8, "silver", true)
const unicycle = new Vehicle(1, "gold", false)

console.log(bicycle)
console.log(truck)