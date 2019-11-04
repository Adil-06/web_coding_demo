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
        $(".img1").css({ "width":"15px" , "height" : "25px" }).slideUp(2000).slideDown(2000);
        $(".img2").css({ "width":"15px" , "height" : "25px" }).slideUp(2000).slideDown(2000);
        $(".img3").css({ "width":"15px" , "height" : "25px" }).slideUp(2000).slideDown(2000);
        $(".img4").css({ "width":"15px" , "height" : "25px" }).slideUp(2000).slideDown(2000);
        $(".img5").css({ "width":"15px" , "height" : "25px" }).slideUp(2000).slideDown(2000);
    }
       
    var startani =  setInterval(move,5000); 
    // to start animaton
    // $(".btnstart").click(function()
    // {
    //    setInterval(move); 
    
    // });
    

    // to stop animation
    $(".btnstop").click(function(){
        console.log("inside stop");
   //  $(".img1 .img2 .img3 .img4 .img5").css({"width":"10px" , "height":"20px"});
       
       clearInterval(startani);

  

    });





});