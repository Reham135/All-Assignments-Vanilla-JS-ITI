
var loc= location.search.slice(1).split("&");


var _name=loc[0].split("=")[1];
var _age=loc[1].split("=")[1];
var _birthdate=loc[2].split("=")[1];
var _address=loc[3].split("=")[1];


document.writeln("Name is : "+ _name + "<br>");
document.writeln("Age is : " +_age + "<br>");
document.writeln("Birthdate is : " + _birthdate + "<br>");
document.writeln("Address is : " + _address);

