
////First Problem
//var msg = prompt("Enter your message");
//for (i = 1; i <=6; i++) {
//    document.writeln("<h"+ i +">"+ msg +"</h"+ i +">")
//}






////Second Problem
//var number
//var sum =0;
//do {
//    number = parseFloat(prompt("Enter the numbers"))
//    sum += number;
//} while (number != 0)
//    document.writeln("the sum is " + sum);




////Third Problem
//var Expression = prompt("Enter Math Expression");
//document.writeln("You entered: " + Expression + " and the result is: " + eval(Expression) )





//Fourth problem
var name;
var BirthYear;
var Age;
do
{
    name = prompt("Enter Your Name")
}
while (!isNaN(name));

do
{
    BirthYear = prompt("Enter Your BirthYear")
}
while (isNaN(BirthYear) || BirthYear >= 2010);

Age = 2023 - BirthYear;
document.write("<h3>Name:</h3>" + name + "<h3 > Birth Year :</h3>" + BirthYear + "<h3 > Age:</h3>" + Age)
