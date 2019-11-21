
console.log("hi there");

var num1 = document.getElementById("input1");
//var num2= document.getElementById("input2");
var operator = document.getElementById("opt");
//var res;
function shownum(obj){
    console.log("inside show num");
     num1.innerHTML +=   obj.innerHTML; 
   // num2.innerHTML += obj.innerHTML;
 }
function showopt(obj){
// operator.innerHTML = obj.innerHTML;
num1.innerHTML += obj.innerHTML;
}
function clearall(){
   // num2.innerHTML ="";
    num1.innerHTML="";
   // operator.innerHTML = "";
    document.getElementById("result").innerHTML = "";
}

function result(){
  var  res = eval(num1.innerHTML);
    document.getElementById("result").innerHTML = ''+res;
    num1.innerHTML="";

}
