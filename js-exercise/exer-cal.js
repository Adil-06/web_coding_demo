

var result , clear, add, min, divide, mutli, firstNum , secondNum ;

 function getNum4() {
   var x = document.getElementById("num4").innerHTML;
   return x;
};
var show = function () {
 //  console.log("here");
    document.forms["myform"]["fn"].value = getNum4();
};
 function clearAll() { 
     console.log("clear");
 document.forms['myform']['fn'].value = "0";

};

