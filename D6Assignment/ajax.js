
function createTabel(data) {
    for (var i = 0; i < data.length; i++) {
        
        var street = (data[i].address.street) 
        var city = (data[i].address.city )
        var add= street +" st  , "+  city;
 
        var tablebody = document.getElementById("tbody")
        var row = document.createElement("tr")
        var c1 = document.createElement("td")
        var c2 = document.createElement("td")
        var c3 = document.createElement("td")
        var c4 = document.createElement("td")
        
        c1.style.border = "2px solid black";  //table style
        c2.style.border = "2px solid black";
        c3.style.border = "2px solid black";
        c4.style.border = "2px solid black";
        row.style.textAlign="center";
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
        tablebody.appendChild(row);
        c1.innerText = data[i].id;
        c2.innerText = data[i].name;
        c3.innerText = data[i].email;
        c4.innerText = add;
    }
}

function getDate() {
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/users";
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                createTabel(data);

            }
        }
    }
}

