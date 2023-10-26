//////Task2

//#region select by id 
var catsvar=document.getElementById("catsId")
//#endregion

var intervalId;
var i=1;

function nextFun() {
    i++
    if(i>5){
    i=1;
    }
    catsvar.src= "cats/" +i+ ".jpg";
}
function previousFun() {
    i--
    if(i<1){
    i=5;
    }
    catsvar.src = "cats/" +i+ ".jpg";
}

function startInterval(){
    intervalId=setInterval(nextFun,1500) 
    }
 function stopInterval(){
    clearInterval(intervalId)
 }
