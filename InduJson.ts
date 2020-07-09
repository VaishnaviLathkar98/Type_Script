var indujson1=
        {

Status:"Success",
Data:   [
        {
        Productname:"Shahi Utane",
        Quantity:1,
        weight:"50gm",
        price:50 
        },
        {
            Productname:"Gulab Utane",
            Quantity:1,
            weight:"500gm",
            price:60  
        }],
error:"invalid",
 Location:[
            {
                area:"Shivaji Nagar",
                city:"Nanded",
                state:"Maharastra"

            }
        ]
    }

//Retrive the Data
console.log("Status is "+indujson1.Status);
console.log("Error  "+indujson1.error);

console.log("--------------------------");

//Retrive the Product Data
for(let i=0; i<indujson1.Data.length;i++)
{
console.log("----------------------------------------------");
console.log("Product Name  "+indujson1.Data[i].Productname);
console.log("Quantity  "+indujson1.Data[i].Quantity);
console.log("price  "+indujson1.Data[i].price);
console.log("Weight  "+indujson1.Data[i].weight);
}

//Retrive LOcation

for(let i=0;i<indujson1.Location.length;i++){
    console.log("-------------------------------------------");
    console.log("Area "+indujson1.Location[i].area);
    console.log("City "+indujson1.Location[i].city);
    console.log("State "+indujson1.Location[i].state);
}



