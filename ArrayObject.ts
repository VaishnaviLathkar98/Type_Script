//Array_Of_Object
var arrobj1=[
        {
            fname:"Vaishnavi",
            lname:"Lathkar",
            rollno:1
        },
        {
            fname:"Shailaja",
            lname:"Lathkar",
            rollno:2

        },
        {
            fname:"Devidas",
            lname:"Lathkar",
            rollno:3
        },
        {
            fname:"Prathmesh",
            lname:"Lathkar",
            rollno:4
        }
    ];

    //Retriving the single Data
    console.log("--------------------------------");
    console.log("Firstname"+arrobj1[0].fname);
    console.log("Lastname:"+arrobj1[0].lname);
    console.log("RollNo:"+arrobj1[0].rollno);
    console.log("----------------------------------");

    //Retriving the whole Data
    for(let i=0;i<arrobj1.length;i++){
        console.log("-----------------------------");
        console.log("Firstname"+arrobj1[i].fname);
        console.log("Lastname:"+arrobj1[i].lname);
    console.log("RollNo:"+arrobj1[i].rollno);   
    }