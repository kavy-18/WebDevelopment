function CalculateTax(income){
    if(income>500000){
        return income*(.3);
    }
    else if(income>100000){
        return income*(.15);
    }
    else return income*(.1);
}
let tax1=CalculateTax(600000);
let tax2=CalculateTax(300000);
let tax3=CalculateTax(60000);
console.log(tax1);
console.log(tax2);
console.log(tax3);