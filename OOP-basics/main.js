//OOP basics lesson spot checks

// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//         this.children = []
//     }

//     giveBirth(name){
//         this.children.push(name)
//     }
// }


// const cat = new Animal("Puss", 4)
// cat.giveBirth("Dolly")
// console.log(cat.children)


// const dog = new Animal("Simba", 4)
// console.log(`${dog.name} has ${dog.numLegs} legs.`)


// class Human {
//     constructor(name, age, isFriendly){
//         this.name = name
//         this.age = age
//         this.isFriendly = isFriendly
//     }
// }

// const user1 = new Human("Jill", 26, true)

// console.log(`${user1.name} is ${user1.age} and is ${user1.isFriendly ? "friendly" : "not friendly"}.`)


class Vehicle {
    constructor(x, y, speed, fuel){
        this.x = x
        this.y = y
        this._speed = speed
        this._fuel = fuel
        Vehicle.carsSold++
    }

    set speed(speed){
        if(speed < 0){
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }

    get speed(){
        return this._speed
    }

    set fuel(amount){
        if(amount < 0 || amount > 150){
            return console.log("Fuel must be between 0 and 150")
        }
        this._fuel = amount
    }

    get fuel(){
        return this._fuel
    }

    static getInfo(){
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }

    static calculateMoney(){
        console.log(`Made ${Vehicle.carsSold * 30},000 dollars.`)
    }
}

Vehicle.carsSold = 0


const c = new Vehicle()
c.x = 3
c.y = 1
c.fuel = 155
c.speed = 10
console.log(c.fuel)

const renault = new Vehicle(4, 67, 4)
const citron = new Vehicle(89, 3243, 2)

Vehicle.getInfo()
Vehicle.calculateMoney()