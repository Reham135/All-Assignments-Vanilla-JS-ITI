////First Problem (adding,multiply,devision)

var myArray = new Array(3);
var add=0;
var multiply=1;
var divide = 1;
//var flag = true;
for (var i = 0; i < myArray.length; i++)
{
    myArray[i] = parseFloat(prompt("Enter three numbers"));
}

for(var i = 0; i < myArray.length; i++)
{
    add += myArray[i];
    multiply = multiply * myArray[i];
    
    if (myArray.indexOf(0) <= 0)
    {

        if (i == 0)
        {
            divide = myArray[i]
        }
        else
        {
            divide /= myArray[i]

            document.writeln("devision of the three values is " + divide + "<br>");
            break ;
        }
        
    }
    else
    {
        divide /= myArray[i]
        document.writeln("<h4>Cannot divide by zero</h4>" + " <br>");
    }
}
document.writeln("Sum of the three values is " + add + "<br>");
document.writeln("Multiplication of the three values  is " + multiply + "<br>");

    

    
//2.Second Problem
//var radius = parseFloat(prompt("Enter the radius of a circle"));
//var circleArea= Math.PI * Math.pow(radius,2);
//alert("The area of the circle is " + circleArea);
//var sqr = parseFloat(prompt("Enter another value to calculate the square root"));
//var squareR = Math.sqrt(sqr);
//alert("The Square root is " + squareR);
//var angle = parseFloat(prompt("Enter the angle to calculate its cosine"));
//var coAngle = Math.cos(angle);
//document.writeln("the cos of " + angle+" is " + coAngle);






////3.Third Problem
//var count = 0;
//var str = prompt("Enter the string you want to check");
//for (var i = 0; i < str.length; i++)
//{
//    if (str[i] == 'e' || str[i] == 'E')
//    {
//        count++
//    }
//} document.writeln("The count of 'e' is " + count);





//////4.array sorting
//var myarr = new Array(5);
//for (var i = 0; i < myarr.length; i++)
//{
//    myarr[i] = prompt("Enter five numbers");
//}
//document.writeln("my array is " + myarr + "<br>");
//document.writeln("the ascending sorting is " + myarr.sort() +"<br>");
//document.writeln("the descending sorting is " + myarr.sort().reverse());
