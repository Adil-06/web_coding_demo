
   // document.getElementById("msg_heading").style.color = "black";

   var el = function(element) {
    if (element.charAt(0) === "#") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };

   var digits;
   var numbers = el(".num");
 

   var getnum = function(){
       if (numbers[0]) {
           return document.getElementById("num9").innerHTML;
       } else if(numbers[1]){
        return document.getElementById("num8").innerHTML;
           
       } else if(numbers[2]){
        return document.getElementById("num7").innerHTML;

       } else { return alert ("wrong logic");}
   

   } 

   function display(){
 document.forms["myform"]["entery"].value = getnum();

   }


