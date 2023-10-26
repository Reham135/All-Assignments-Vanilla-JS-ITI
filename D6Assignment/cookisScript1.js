 //getting data from user
 var _name = document.getElementById("nameId");
 var _age = document.getElementById("ageId");
 var _address = document.getElementById("addressId");

 //Setting cookie 
function getcookieFun() {
    document.cookie = "username=" + _name.value;
    document.cookie = "userage=" + _age.value;
    document.cookie = "useraddress=" + _address.value;
}


