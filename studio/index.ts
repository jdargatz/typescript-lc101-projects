// Instructions are published in the online book. The URL is:
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/studio.html

// TODO: 
// * Code the Astronaut, Cargo, and Rocket classes in new files.
// * Import the three classes into this file.
import {Astronaut} from './astronaut';
import {Cargo} from './cargo';
import {Rocket} from './rocket';
import {Payload} from './Payload';

let falcon9: Rocket = new Rocket('Falcon 9', 7500);

let astronauts: Astronaut[] = [
    new Astronaut('Mae', 75),
    new Astronaut('Sally', 81),
    new Astronaut('Charles', 99),

];

for (let i = 0; i < astronauts.length; i++) {
    let astronaut = astronauts[i];
    let status = '';
    if (falcon9.addAstronaut(astronaut)) {
        status = "On board";
    } else {
        status = "Not on board.";
    }
    console.log(`${astronaut.name}: ${status}`);
}

let cargo: Cargo[] = [
    new Cargo(3107.39, "Satellite"),
    new Cargo(1000.39, "Space Probe"),
    new Cargo(753, "Water"),
    new Cargo(541, "Food"),
    new Cargo(2107.39, "Tesla Roadster"),
 ];
 
 for (let i = 0; i < cargo.length; i++) {
    let c = cargo[i];
    let loaded = '';
    if (falcon9.addCargo(c)) {
       loaded = "Loaded"
    } else {
       loaded = "Not loaded"
    }
    console.log(`${c.material}: ${loaded}`);
 }
 
 console.log(`Final cargo and astronaut mass: ${falcon9.currentMassKg()} kg.`);