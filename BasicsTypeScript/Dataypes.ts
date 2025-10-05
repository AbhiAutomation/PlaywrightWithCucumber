//String type reprsernts sequence kindo f data it represnts 3 way 
//1)Double quotes
//2)Single quotes
//3)Back tick
let firstName:string="Abhishek";
let secondName:string='Kumar';
let fullName:string=`Hello ${firstName} ${secondName}`;
console.log(firstName);
console.log(secondName);
console.log(fullName);

// bbolean data type  using some conditional  type 
let isDone:boolean=true;
console.log(isDone);
//number data type
let price:number=100;
// any data type
let data:any= 9.01245477 ;
console.log(typeof(data))

// union data type whic is union of multiple data type 
let unionType:string|number;    
let Id :string|number|boolean;
///console.log(typeof(Id)) // undefined
Id=123;
console.log(typeof(Id)) // number
///console.log(typeof(unionType)) // undefined

///id=`@1234`
////console.log(typeof(id)) // string

// array data type
let arr:number[]=[1,2,3,4,5,6,7,8,9];
console.log(arr);
arr.push(10);
console.log(arr);
arr.length

//function data type
function add(a:number,b:number):number{
    return a+b;
}   

//void data type
function print():void{
    console.log("Hello World");
}
//