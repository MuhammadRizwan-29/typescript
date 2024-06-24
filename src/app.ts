/*
const input1 = document.getElementById("num1") ! as HTMLInputElement;
const input2 = document.getElementById("num2") ! as HTMLInputElement;
const button = document.querySelector("button")!;

function add(num1: number, num2: number){
    return num1 + num2;
}

button.addEventListener("click", function(){
    console.log(add(+input1.value, +input2.value));
})
*/

/*
const person:{
    name: string; 
    age: number;
    hobbies: string[];
    email: string;
} = {
    name: "Muhammad Saim",
    age: 25,
    hobbies: ["Book reading", "Exploring"],
    email: ""
}
*/

/*
type Person = {
    name: string; 
    age: number;
    hobbies: string[];
    email: string;
} 

const person: Person = {
    name: "Muhammad Saim",
    age: 25,
    hobbies: ["Book reading", "Exploring"],
    email: ""
}

person.email = "abc@test.com";
*/

// Tuples
/*
const statuses: [number, string] = [400, "Not found"];
statuses.push("New");

let data: string | number;
data = "Muhammad Rizwan";
data = 29;
*/
/* Literal Represenetation*/ 
/*
function myFunc (num1: number, num2: number, cond: "add" | "subtract"){
    if(cond ==="add"){
        return num1 + num2;
    } else if(cond ==="subtract"){
        return num1 - num2;
    }
}
console.log(myFunc(5, 8, "add"))
*/
/* Applying TS on the FUNCTION */ 
/*
let myAddFunc: (x:number, y:number)=> number;

function addFunc(num1: number, num2: number):number{
    // cb(true);
    return num1 + num2;
}

myAddFunc = addFunc;
*/

/* Classes in TS */ 

abstract class Student{

    name: string;
    rollNo: number;
    private skills: string[] = [];

    constructor(n: string, r: number){
        this.name = n;
        this.rollNo = r;
    }

    // addSkill(skill: string){
    //     this.skills.push(skill);
    // }

    abstract addSkill(skill: string): void;

    getSkills(){
        return this.skills;
    }
}

/**
const std1 = new Student("Hamid", 2003);
std1.addSkill('Frontend Developer');
console.log(std1);
*/ 

/* Inheritance */ 
class Volunter extends Student{

    private canVolunteerIn: string[] = [];
    static id: string = "KSW-029";

    constructor(name: string, rollNo: number) {
        super(name, rollNo);
    }

    addVolunteerSkill(skill: string){
        this.canVolunteerIn.push(skill);
    }

    get willVolunteerIn (){
        return this.canVolunteerIn;
    }

    set willVolunteerIn (skills: string[]){
        for(const skill of skills){
            if(!skill){
                return;
            }
        }
        this.canVolunteerIn = skills;
    }

    addSkill(skill: string): void {
        
    }
}

/*
const volStd1 = new Volunter("Amjad", 188);
volStd1.addSkill('MERN Stack Developer');
volStd1.addVolunteerSkill('Check Exams');
console.log(volStd1);
volStd1.willVolunteerIn = ["Attendence Checker", "Exam Checker"];
console.log(volStd1.willVolunteerIn);
console.log(Volunter.id);
*/ 


/* Singleton */ 

class Human{

    static object: Human;

    private constructor(private name: string){

    }

    static getObject(name: string){

        if(this.object){
            return this.object;
        }

        this.object = new Human(name);
        return this.object;

    }
}
/*
const saim = Human.getObject("Dr. Saim");
const riz = Human.getObject("Engr. Riz");
console.log(saim);
console.log(riz)
*/

/* Interface */ 
/*
interface Person{
    name: string;
};
let saim: Person;
saim = {
    name: "Dr. Saim"
}
*/ 

/*
interface Person{
    name: string;
    speak(sentence: string): void;
}

class HumanB implements Person{
    
    constructor(public name: string){}

    speak(sentence: string): void {
        
    }
}


import { Person } from "./types";
let saim: Person;

saim = {
    name: "SAIM",
    speak(sentence: string) {
        
    },
}
*/ 

/* Advance TYPES */ 
/*
//  UNION
type combined = string | number;
let abc: combined;
abc = 12;
abc="New";

// INTERSECTION
type Bird = {
    name: string,
    flyingSpeed: number
}
type Animal = {
    name: string,
    runningSpeed: number
}
type Creature = Bird & Animal;

let hen: Creature;
hen = {
    name: "Hen",
    runningSpeed: 45,
    flyingSpeed: 22
}

interface Bird {
    name: string,
    flyingSpeed: number
}
interface Animal {
    name: string,
    runningSpeed: number
}
interface Creature extends Bird, Animal{}



// Types GUARDS


type Bird = {
    name: string,
    flyingSpeed: number
}
type Animal = {
    name: string,
    runningSpeed: number
}

type Creature = Bird | Animal;

function log(creature: Creature){
    console.log(creature.name)
    // console.log(creature.runningSpeed);
    if("runningSpeed" in creature){
        console.log(creature.runningSpeed);
    }
    if("flyingSpeed" in creature){
        console.log(creature.flyingSpeed);
    }
}
log({name: "Donkey", runningSpeed: 30});

// Class Level
class BirdC{
    constructor(public name: string, public runningSpeed: number){}
}
class AnimalC{
    constructor(public name: string, public flyingSpeed: number){}
}

type CreatureC = BirdC | AnimalC;

function logC(creature: Creature){
    console.log(creature.name)
    // console.log(creature.runningSpeed);
    if(creature instanceof BirdC){
        console.log(creature.runningSpeed);
    }
    if(creature instanceof AnimalC){
        console.log(creature.flyingSpeed);
    }
}
logC(new AnimalC("Dong", 70));

*/

// Type Casting | Generics | Decorators & Function Overloading

// Generics
const input1 = <HTMLInputElement>document.getElementById("num1");

const promise: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("DONE");
    }, 2000)
});

promise.then(data=>{
    data.split("");
})

function merger<T extends object, U extends object>(objA: T, objB: U){
    return {...objA, ...objB}
}
const mergeObj = merger({name: "Saim"}, {age: 24});
console.log(mergeObj.age);

// Decoraters
function Logger(data: string){
    return function(_: Function){
        console.log("Logging......" + data);
    }
}

function FillHTML(template: string, id: string){
    return function(_: Function){
        const el = document.getElementById(id);
        if(el){
            el.innerHTML = template;
        }
    }
}
@Logger("data")
@FillHTML("Here's my template text", "para_text")
class PersonD {
    name = "Saim";

    constructor(){
        console.log("Called");
    }
}

const saimD = new PersonD();

// Overloading
type CombinedT = string | number;

/* 
function addC (a: CombinedT, b: CombinedT){
    if(typeof a === "number" && typeof b === "number"){
        return a+b;
    } else if(typeof a === "string" && typeof b === "string"){
        return a+b;
    }else{
        throw Error("Please check types.");
    }
}
*/
function addC (a: string, b: string):string;
function addC (a: number, b: number):number;
function addC (a: CombinedT, b: CombinedT){
    if(typeof a === "number" && typeof b === "number"){
        return a+b;
    } else if(typeof a === "string" && typeof b === "string"){
        return a+b;
    }else{
        throw Error("Please check types.");
    }
}

addC(1, 2);
addC("abc", "def");
// addC()