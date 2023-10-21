let obj1={
    name : "ishu",
    age : 21
};
let obj2={
    name : "ishu",
    age : 25
};
 let key1=Object.keys(obj1);
 let key2=Object.keys(obj2);
let flag=true;
 if(key1.length==key2.length){

    for(let val in obj1){
        if(obj1[val]!=obj2[val]){
            flag=false;
        }
    }

 }
 else{
    flag=false;

 }

 if(flag){
    console.log("obj1 and obj2 are same");
 }
 else{
    console.log("obj1 and obj2 not same");
 }

 