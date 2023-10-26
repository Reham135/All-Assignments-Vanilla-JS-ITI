
//////Task1
var newWin;
var intervalId;
function Openwindow() {
    newWin = open("FlyingChildWindow.html", "", "width=200 height=200");
    newWin.focus();
}
function closeWindow() {
    newWin.close();
}
function moveToF() {
    newWin.moveTo(Math.random()*2000,Math.random()*2000);
    newWin.focus();
}

function startInterval(){
    intervalId=setInterval(moveToF,2000) 
    }

 function stopInterval(){
    clearInterval(intervalId)
 }

















