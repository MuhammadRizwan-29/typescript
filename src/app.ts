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