
  var timeout;
  var showTime =  function() {   
    var time = new Date();

     document.getElementById("clockDemo").innerHTML = time.toLocaleTimeString();  

    } 

 function stopTime() {
     console.log('inside stop');
     clearInterval(timeout);
 } 
 timeout =   setInterval(showTime, 1000);
 var d = new Date();
 
 (function(){
 document.getElementById('demoDate').innerHTML =  d.toDateString();


 })();