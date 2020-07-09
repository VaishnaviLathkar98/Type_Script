//Map Function
var arr3=[10,20,30,40,50,60];
// var temp=arr3.map((myvalue)=>{
//     return(myvalue*myvalue);
// });

// console.log(arr3);
// console.log(temp);
console.log("---------------------------------------------");
var temp2=arr3.map((Element,i)=>{

if(i==2||i==4){
    return(Element*Element)
}
});

console.log("original Array"+arr3);
console.log(temp2);

//////Custom Function
function getSquare(Element:number){
    return(Element*Element);
}

 var temp4=arr3.map(getSquare);
 console.log(temp4.join(" "));

 //Tuple
 var temp5=[2,"5",true,3.14]
 console.log(temp5.join(" "));

//==,=== operator
//==-it check the data of variable to compare the data 
//===-it check as data as well as DataType

var i:number=2;
if(i==2){
    console.log("true");
}else{
    console.log("flase");
}
