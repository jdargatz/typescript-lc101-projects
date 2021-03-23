import { Astronaut } from "./astronaut";
import { Cargo } from "./cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    
    }

    sumMass (items: Payload[]): number {
        //returns the sum of all items using each item's massKg
        let mass: number = 0;
        for (let i =0; i<items.length;i++ ){
        mass = mass+items[i].massKg;
    }
        return mass;
    }

    currentMassKg(): number {
        //uses sumMass to return combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }
    
    canAdd(item:Payload):boolean {
        //returns true if currentMassKg() + item.massKg  lessthan/equal to totalCapacityKg
        let b = true;
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
        
    }

    addCargo(cargo:Cargo):boolean {
        //uses canAdd to see if another item can be added
        //if true, adds cargo to cargoItems and returns true
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo)
            return true
        } else {
            return false
        }
    }

    addAstronaut(astronaut:Astronaut):boolean {
        //uses canAdd to see if another astronaut can be added
        //if true, adds astronaut to this.astronauts and returns true
        //this.canAdd(astronaut) ? this.astronauts.push(astronaut) : return false;
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut)
            return true
        } else {
            return false
        }
    }
    }