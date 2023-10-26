    //array to push the selected items in it
//Get Elements in the Global scope
var table = document.getElementById("tableId");
var _name = document.getElementById("nameId")
var _age = document.getElementById("ageId")
var _courses = document.getElementById("coursesId")
//name validation
function changeColor() {
    if (_name.value.length > 8 || _name.value.length < 4 || !isNaN(_name.value)) {
        _name.style.color="red"
        return false;
    }
    else {
        _name.style.color = "black"
        return true;
    }
}

//age validation after select the age in the glopal
function changeAgeColor() {
    if (_age.value.length > 2 || _age.value < 18 || _age.value > 30) {
        _age.style.color = "red"
        return false;
    }
    else {
        _age.style.color = "black"
        return true;
    }
}

//add function after select the courses in the glopal
function addFun() {
    CoursesArray = []
    if (changeColor() && changeAgeColor()) {

        for (var i = 0; i < _courses.length; i++) {
            if (_courses.options[i].selected) {
                CoursesArray.push(_courses.options[i].value)
            }
        }
        var row = document.createElement("tr")
        var c1 = document.createElement("td")
        var c2 = document.createElement("td")
        var c3 = document.createElement("td")
        var c4 = document.createElement("td")
        var btn = document.createElement("button")
        c1.style.border = "2px solid black"   //table style
        c2.style.border = "2px solid black";
        c3.style.border = "2px solid black";
        c4.style.border = "2px solid black";
        btn.onclick = function () {
            table.removeChild(row)
        }
        c4.appendChild(btn);
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
        table.appendChild(row)
        c1.innerText = _name.value;
        c2.innerText = _age.value;
        c3.innerText = CoursesArray.toString();
        btn.innerText = "Delete";             //>>delete button in each cell

    }
}

//delete last row function after select the table(in the global)
function deleteLastRow(tableId) {
    var rowCount = table.rows.length;
    if (rowCount > 1) {
        table.deleteRow(--rowCount);
    }
}
//deleteAll function after select the table(in the global)
function deleteAll() {
    while (table.rows.length > 0) {
        table.deleteRow(1);
    }
    var deleteAllButton = document.getElementById("deleteAllId");
    deleteAllButton.addEventListener("click", deleteAll);
}

