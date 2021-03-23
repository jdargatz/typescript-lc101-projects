import { Astronaut } from "./astronaut";
import { Cargo } from "./cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];
    
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    
    }

    sumMass (items: Payload[]): number {
        //returns the sum of all items using each item's massKg
        let mass = 0;
        for (let i =0; i<items.length;i++ ){
        mass = mass+items[i].massKg
    }
        return mass;
    }

    currentMassKg(): number {
        //uses sumMass to return combined mass of this.astronauts and this.cargoItems
        let number = 0;
        
        return number;
    }
    
    canAdd(item:Payload):boolean {
        //returns true if currentMassKg() + item.massKg  lessthan/equal to totalCapacityKg
        let b = true;
        return b;
    }

    addCargo(cargo:Cargo):boolean {
        //uses canAdd to see if another item can be added
        //if true, adds cargo to cargoItems and returns true
        let b = true;
        return b;
    }

    addAstronaut(astronaut:Astronaut):boolean {
        //uses canAdd to see if another astronaut can be added
        //if true, adds astronaut to this.astronauts and returns true
        let a = true;
        return a;
    }
    }