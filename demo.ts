//static typing 
let message1 : string = "Hello" ;

console.log (message1);
//
//writing a function
function add (a:number, b:number) : number {
    return a+b;
}

add(1,90);
//Above line  showing error because  pass a parmaeter string instead of number 


// objects
let person : {  name: string,age: number} = {  name: "John", age: 30};

let employe :{name:string,age:number,jobTitle:string}={name:"John",age:30,jobTitle:"Manager"};;

//class