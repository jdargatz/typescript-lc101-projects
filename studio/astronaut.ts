import { Payload } from "./Payload";

export class Astronaut implements Payload{
name: string;
massKg: number;

constructor(name: string, massKg: number) {
    this.name = name;
    this.massKg = massKg;

}

}