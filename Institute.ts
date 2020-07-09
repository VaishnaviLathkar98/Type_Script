//Json_Array_of_Object
var institute=
{
    name:"Shree Engg",
    Location:
        {
        area:"powai naka",
        city:"nanded",
        pincode:"45281",
        State:"MH"
        },
    Data:
        [
            {
                Roll_no:10,
                Month:['jan','march','april'],
                Marks:[25,30,45]
            },
            {
                Roll_no:11,
                Month:['may','june','july'],
                Marks:[35,35,55]  
            }
        ]

};


//Retrive the Data
console.log("------------------------------------------");
console.log("Institute  "+institute.name);

//Retrive the Data
console.log("-------------------------------------------");
for(let i=0; i<institute.Data.length;i++){
console.log("Roll_No: "+institute.Data[i].Roll_no);
for(let j=0; j<institute.Data[i].Month.length;j++){
    console.log(
        `
        -------------------------------------
        Roll_No is ${i} 
        Month is ${institute.Data[i].Month[j]}
        Marks is ${institute.Data[i].Marks[j]}

        `
    );
}
}