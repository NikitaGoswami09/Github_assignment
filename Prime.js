let X=7;
let count=0;
for(let i=1;i<=7;i++)
{
    if(X%i==1)
    {
        count+=1;
    }

}
if(count==2)
{
    console.log("Prime Number");

}
else
{
    console.log("Not a prime number");
}