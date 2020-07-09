//Optional Parameter

// function mult(a,b?){
// console.log(`Value of A is ${a}
// Value of B is ${b}
// Value of a+b is ${a*b}`);
// }

// mult(2);

console.log("--------------------------");
//Optional Parameter with the DataType showing
// function mult1(a?:number,b?:number){
//     console.log(`Value of A is ${a}
//     Value of B is ${b}
//     value of  is ${a*b}
//     `);
// }

// mult1(2,3);

console.log("------------------------------");

//Default Parameter Function
// function mult2(a:number,b:number,c?:number){
// console.log(`Value of A is ${a}
// Value of A is ${b}
// Value of A is ${c}
// Value of a*b*c ${a*b*c}
// `);
// }

// mult2(2,3);
// mult2(2,3,5);

console.log("--------------------------------------");
//Default Parameter Function with constant Value

// function abc(a:number,b:number,c:number=3){
//     console.log("Value of A is"+a);
//     console.log("Value of b"+b);
//     console.log("Value of C is"+c);
//     console.log(`Multiplication of a*b*c${a * b * c}`);
// }

// abc(2,4);
// abc(3,4,5);
console.log("---------------------------");

// var temp8=(a:number,b:number,c:number=2)=>{
//     console.log("Fat Arrow Functin------"+(a*b*c));
// }

// console.log(temp8(1,2));
// temp8(1,2);


console.log("------------------------------------");
// var temp9=(a:number,b:number,c:number=2)=>{
//     return (a*b*c);
// }

// console.log(temp9(1,2));

console.log("---------------------------");
//Function Constructor
// var fun= new Function("a","b","console.log(a+b)");
// fun(70,70);

//Or
var fun1=new Function("a2","b2",`console.log(a2)
console.log(b2)
console.log(a2*b2)`);

fun1(10,20);
