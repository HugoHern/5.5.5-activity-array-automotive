//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)

        this.maxPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maxSpeed = 160
        this.fuel = 10
        this.scheduleService = false

    }

    loadPassenger(passengers){
       if (passengers <= this.maxPassengers){
           passengers = this.passenger
       }
    }

    start(){
        if(this.fuel >= 0){
            this.started = true
        }
        else{
            this.started = false
        }
    }

    scheduleService(miles){
        if(miles > 30000){
            this.scheduleService = true
        }

    }


}