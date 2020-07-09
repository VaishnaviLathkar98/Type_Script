// var arr:number[]=[];
// console.log("Array length"+" "+arr.length);

// //Principal Lifo 
// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.push(40);
// console.log(arr);
// console.log(arr.join("#"));
// console.log(arr.join("@"));
// console.log(arr.join("$"));

// var temp=arr.pop();
// console.log(temp);

var arr1:number[]=[1,2,3,4,5,6,7,8,9];
// console.log("----------------------------------");
// console.log(arr1);

// console.log("Delete 1 Element from Array "+arr1.splice(2,1));
// console.log("Insert 1 element "+arr1.splice(2,0,50));
// console.log(arr1);

var arr2:number[]=[10,20,30,40,50];
// console.log(`---------------------------
// Array Value is ${arr2}---------`);

// arr2.splice(3,0,10,20,30,40,50);
// console.log(arr2.join(" "));

// arr2.splice(3,5);
// console.log(arr2);

// arr2.splice(2,arr2.length-2);
// console.log("Last length"+arr2);

arr2.splice(2,1,50);
console.log(`Replace${arr2}`);
