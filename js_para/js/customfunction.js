
// for argments used in parameters
(function(){


    var resAdd = document.getElementById("res-add");
    var Addnum = document.getElementById('btnadd');
    Addnum.addEventListener("click", numToAdd);
    function numToAdd(num) {
     var result = 0;
     for( var i = 0; i < arguments.length; i++) {
         result += arguments[i];
     }
     return  " the addition of parametesis : " +result + " " +" the lenght of arguments is : " +arguments.length;
    }
     Addnum.addEventListener('click', show);
     function show() {
      var add = numToAdd(1,2, 4,4,3,-4);
      resAdd.innerHTML = add;
     }

     
})();

// for recursive function
(function(){
 //document.write("hi there");
 var res_para= document.getElementById("result-para");
 document.getElementById('demo-rec-btn').addEventListener("click" , getinput);
 function getinput(){
    var input = document.getElementById("inputnum").value;
    
 if(isFinite(input) == false) {
    alert("please enter number");
    console.log("inside if");
    document.getElementById("inputnum").value = " ";

 } else
    { 
       function factorial(n) {
          if ((n==0) || (n==1))
          return 1;
           else 
         facnum = (n * factorial(n-1))
          return facnum;
            }
         var n = parseInt(input);
         res_para.innerHTML ="The factorial of number : " + n +" is  "+ factorial(n);
         }
         document.getElementById("inputnum").value = " ";

    }
    

})();

// to get the total options from list
( function (){

    var btnoptions = document.getElementById("btnoptions");
    btnoptions.onclick = showlistofoptions;
    function showlistofoptions(){
        var list = document.getElementById("mylist").length;
        var listlength = document.getElementById("listlength");
        listlength.innerHTML = list;
        
    }
    
    // for remove color from list

    var btnremovecolor = document.getElementById("btn-rem-color");
    btnremovecolor.onclick = removecolor;
    function removecolor () {

        var list = document.getElementById("mylist");
        list.remove(list.selectedIndex);

    }


})();

// for javascipt closures

 var count = (function () {
        var num = 0;
        return function()
        {
          num +=  1; 
          return num;
        }
                
    })();
    

    function countresult() {

         document.getElementById('demo-closures').innerHTML= count();

         var nameToshow = document.getElementById('name-para');
         var name ="java";
         function full(){
             return name + "-script";
         } 
        nameToshow.innerHTML = full().toUpperCase();
        nameToshow.style.fontWeight = "bold";
        nameToshow.style.color = 'brown';

    }


