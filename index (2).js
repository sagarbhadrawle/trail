let ar=["sagar","abhishek","lakhan","laxmi","tension",
       "sagar","abhishek","lakhan","laxmi","tension",
        "sagar","abhishek","lakhan","laxmi","tension",
          "TATA","ambani","chintu"]

let obj={}
for(let i=0;i<ar.length;i++){
  if(obj[ar[i]]==undefined){
    obj[ar[i]]=1
  }
}
console.log(obj)