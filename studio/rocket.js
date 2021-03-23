"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        //returns the sum of all items using each item's massKg
        var mass = 0;
        for (var i = 0; i < items.length; i++) {
            mass = mass + items[i].massKg;
        }
        return mass;
    };
    Rocket.prototype.currentMassKg = function () {
        //uses sumMass to return combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    };
    Rocket.prototype.canAdd = function (item) {
        //returns true if currentMassKg() + item.massKg  lessthan/equal to totalCapacityKg
        var b = true;
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        //uses canAdd to see if another item can be added
        //if true, adds cargo to cargoItems and returns true
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        //uses canAdd to see if another astronaut can be added
        //if true, adds astronaut to this.astronauts and returns true
        //this.canAdd(astronaut) ? this.astronauts.push(astronaut) : return false;
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
