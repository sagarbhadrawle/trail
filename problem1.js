let str="sagar Bhadrawle"
let obj={}
for(let i=0;i<str.length;i++){
     if(str[i]==" "){
       continue
     }
  else{
    if(obj[str[i]]==undefined){
     
    obj[str[i]]=1}
  
  else{
    obj[str[i]]+=1
  }
  }
}
console.log(obj)