function sayHello() {
 // var a=Math.random()
// console.log(a);
// a = a*6;
// a = Math.ceil(a);
// console.log(a);

var b = prompt("Enter Name 1");
var c = prompt("Enter Name 2");
var d = Math.random();
d = d*100;
d =Math.ceil(d);
if(d>80){
    alert("Your score is "+ d + "% and u are made for each other");
}
else if(d>60){
    alert("Your score is "+ d + "% and u can be together");   
}
else {
    alert("Your score is "+ d + "% and it's not good enough");

}
 }