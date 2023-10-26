
////////Task 3
var str = "Reham";
var myarr = [1, 2, 3, 4, 5];
console.log(myarr.join.call(str,'*'));
console.log(myarr.join.apply(str,['*']));
var newArrFunction = myarr.join.bind(str);
console.log(newArrFunction('*'));
