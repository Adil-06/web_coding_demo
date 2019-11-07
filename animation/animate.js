$(document).ready(function(){

    $("#btnMove").click(function(){
         $("#moveText").animate({
            left : "150px",
            opacity : "0.5",
            fontSize : "1em",
    
        } ,"slow");
        document.getElementById("moveText").style.color = "#3716ed";         
    });
    $(".test-div").animate({
        left : '150px'    
    }, "slow");

    
    function move()
    { 
        $(".img1").css({ "width":"8px" , "height" : "12px" }).slideUp(1000).slideDown(500);
        $(".img2").css({ "width":"10px" , "height" : "14px" }).slideUp(1000).slideDown(500);
        $(".img3").css({ "width":"12px" , "height" : "16px" }).slideUp(1000).slideDown(500);
        $(".img4").css({ "width":"14px" , "height" : "18px" }).slideUp(1000).slideDown(500);
        $(".img5").css({ "width":"16px" , "height" : "20px" }).slideUp(1000).slideDown(500);
    }
       
  var startani =  setInterval(move,2000); 
      
     // to stop animation
    //  $(".btnstop").click(function(){
    //      console.log("inside stop");
         
    //      clearInterval(startani);

    //  });

     var stop = document.getElementById("stop");
     stop.addEventListener("click",stopani);
     function stopani(){
        resizeimg();
        clearInterval(startani);
     }
     //stop.addEventListener("click", resizeimg);
     function resizeimg(){
   $(".img1 ,.img2, .img3, .img4, .img5").css({"width":"15px" , "height":"25px"});

     }

     // move the ball
     $(".moveballBtn").click(function(){
         console.log("inside move btn");
         var mo = $(".imgToMove img");
         mo.animate({
             marginLeft: '250px',
             height:'25px',
             width:'25px',
             opacity: '0.3',
             top: '20%'
         },2000);
         mo.animate({
             marginLeft : '0px',
             height:'50px',
             width:'50px',
             opacity: '1'
         },2000);


     });

     $(".resizer").click(function(){
         var re = $(".resizer");
         re.animate({ width: '50%' },1500);
         re.animate({height:'50'},1500);

     });
     $(".resizer").mouseout(function(){
        var re = $(".resizer");
        re.animate({width:'20%'},1500);
        re.animate({height:'20'},1500);

     $(".resizer ").css("fontSize","15px");

    });

    
});