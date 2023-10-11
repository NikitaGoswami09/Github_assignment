let n = 10
flag = false
for(var i = 2;i<n;i++){
    if(n%i==0){
        flag = true
        break
    }
}
if(flag==true){
    console.log("prime not")
}else{
    console.log("prime number")
}

