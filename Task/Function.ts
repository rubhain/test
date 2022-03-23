function min(a: number,b: number)
{
    return a < b ? a : b;
}
console.log(min(1,2));

function pow(x: number,n: number){
    return n = 0 ? 1 : x*pow(x,n-1);
}
console.log(pow(2,4));