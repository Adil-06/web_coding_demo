
console.log("hi there");
// getting values
var num1 = document.getElementById("input1");
var operator = document.getElementById("opt");

// for display a num
function shownum(obj){
    //console.log("inside show num");
     num1.innerHTML +=   obj.innerHTML; 
 }

 // for dispaly operator
function showopt(obj){
num1.innerHTML += obj.innerHTML;
}

// to clear the display area
function clearall(){
    num1.innerHTML="";
    document.getElementById("result").innerHTML = "";
}
// clear the result
function result(){
  var  res = eval(num1.innerHTML);
    document.getElementById("result").innerHTML = ''+res;
    num1.innerHTML="";

}
