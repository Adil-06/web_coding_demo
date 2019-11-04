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
         clearInterval(startani);
         resizeimg();
     }
     //stop.addEventListener("click", resizeimg);
     function resizeimg(){
   $(".img1 ,.img2, .img3, .img4, .img5").css({"width":"15px" , "height":"25px"});

     }


    
});