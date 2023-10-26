var body=document.body;


    var table = document.createElement("table");
    for(var i=0;i<3;i++){
        var tr=document.createElement("tr")
        table.appendChild(tr);
        for(var j=0;j<4;j++){
            var td=document.createElement("td")
              var txt= document.createTextNode("any txt");
              td.appendChild(txt);
              tr.appendChild(td);
              td.style.border="solid"
              
    }
    }
    body.appendChild(table);
table.style.width = "800px"
table.style.hight = "800px"
table.style.textAlign = "center"
table.style.backgroundColor ="aqua"
