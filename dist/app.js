"use strict";
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
//# sourceMappingURL=app.js.map