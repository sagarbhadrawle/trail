let a=15
let count=0
for(let i=1;i<=a;i++){
  if(a%i==0){
    count+=1
  }
}
if(count){
  console.log("prime")
}
else{
  console.log("not prime")
}