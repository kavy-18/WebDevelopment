function factorial(num){
    if(num==0 || num==1) return 1;
    return num*factorial(num-1);
}
let factof5=factorial(5);
let factof6=factorial(6);
console.log(factof5);
console.log(factof6);