var objfun={
    fname:"Vaishnavi",
    Lname:"Lathkar",
    Roll_No:10,
    Full_Name(str1:string,str2:string){
        return (str1+" "+str2);
    }
};

console.log(`
--------------------------------------------------------
First_Name:: ${objfun.fname}
Lname:: ${objfun.Lname}
Full_Name:: ${objfun.Full_Name(objfun.fname,objfun.Lname)}
`);
