
(function(){
// getting ids and classes
var imagelist = document.getElementsByClassName("img-list");
var startbtn = document.getElementById("startbtn");
var stopbtn = document.getElementById("stopbtn");
var incree = 0;
// for start sliding
var incree = 0;
var timer = setTimeout(move, 3000);
function move () {
     for ( var i = 0; i < imagelist.length; i++) {
          imagelist[i].style.display = 'none';
        }
        incree++;
        if(incree > imagelist.length) { incree = 1;}
        imagelist[incree - 1].style.display = 'block';
        timer = setTimeout(move,3000);
}
startbtn.addEventListener('click' , startSlideing);
function startSlideing () {
   
     setTimeout(move, 3000);

}


// for stop sliding
stopbtn.addEventListener('click' , stopSliding);
function stopSliding () {
    console.log("inside stop btn");
 clearTimeout(timer);
}

})();


$(document).ready(function(){
    $(".head").click(function(){
        $(this).hide();
    });


    // for imge animation
    $("#btn-animation").click(function(){
       var imgslide =  $(".img-animate");
       
     // imgslide.animate({width:'0px'},2000);
     imgslide.addClass("animate-class");
     $('img:first-child').css('display', 'inline-block');
     $("img:first-child").css( {width : '0px', height:'100px'});
     $("img:first-child").next().css('display', 'inline-block');
     $("img:first-child").next().css({ width:'0px', height:'100px'});


    });

});