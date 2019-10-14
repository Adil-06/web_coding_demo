 // for js functions

 var fun = function ( a,b) {
        return a * b 
     } ;
 //document.getElementById("demo").innerHTML = fun(12 , 8);
 
 var z = fun(3,7);
document.getElementById("demo").innerHTML = z;


// arrow function
(function() {
 var myarrow = ( a, b ) => a + b;
 document.getElementById("demo_fun").innerHTML = myarrow(4,4); 
}
)();


 // html global function
 function myFunction(a, b) {
  return a * b;
}
document.getElementById("global_fun").innerHTML = window.myFunction(10, 2); 

// constructor function

function cons_fun ( a, b) {
    this.a = a;
    this.b = b ;
  
}
 var w = new cons_fun(44,5);
 document.getElementById("demo_cons_fun").innerHTML = w.a;

 // for the use of apply () methods

 var get_info = {
  full : function() {
      return this.firstname + " " + this.lastname;
    }
} 

 var info = {
     firstname :"mr won",
     lastname : "clark"
 } 

var person_info = get_info.full.apply(info);
document.getElementById("demo_apply").innerHTML = person_info;

// JavaScript Closures
var add = (function(){
  var counter = 0;
  return function () { counter += 1 ; return counter; }

})();
function mycounter(){
   document.getElementById("demo_closure").innerHTML = add();
}

// find the mamimum number

function findmaximum() {
    var i ;
    var max = -Infinity;
    for (i=0; i < arguments.length; i++) { 
        if(arguments[i]>max) {
        max = arguments[i];
       }
    }
    return max;
}
document.getElementById("demo_max").innerHTML = findmaximum(34,55,66,4,5,6,77);

// to find the sum
function sumfunction() {
    var l ;
    var sum = 0;
    for (l=0; l < arguments.length; l++){
        sum += arguments[l];
    }
    return sum;
}
document.getElementById("demo_sum").innerHTML = sumfunction(1,2,3,4,55,44);