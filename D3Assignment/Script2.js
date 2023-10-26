////////Task2
var arr = ["Declare and initialize your variables at the top", "Build modular, specialized functions",
    "Recognize and remove duplicate code", "Comment your code often", "Beware of recursion overuse",
    "Be efficient with DOM manipulations", "Avoid global variables at all costs", "Make use of shorthand notation",
    "Use Strict Mode to catch silent errors", "Set default values"];
var randomTips;
function tips() {
    randomTips = Math.floor(Math.random() * arr.length);
    alert(arr[randomTips]);

}
