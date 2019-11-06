$(document).ready(function()
{
   
    var one = $(".slide-text");
    one.hide();

    $("#testbtn").click(function textmove(){
        setInterval(function(){
       $('#ul  :first-child').fadeIn(1000);
       $('#ul  :first-child').fadeOut(1000).next('.slide-text').fadeIn(2000);
       $('.slide-text').next().fadeOut(1000).next('.slide-text').fadeIn(3000);
       $('.slide-text').next().fadeOut(1000);

    } ,5000);
    
    });

 // $(function(){ // for autoslide
    
 //     $('#ul .slide-text:gt(0)').hide();
 //     setInterval(function(){
 //       $('#ul :first-child').fadeOut(1000).next('.slide-text').fadeIn(2000)
 //       .end().appendTo('#ul');
 //   }, 5000);
    
 //   });

 // second slider code
   $(".btn-move").click(function()
   {

       console.log("in move-btn");
       $('.second-slider .demo-slider:gt(0)').hide();
       setInterval(function(){
           $('.second-slider :first-child').fadeOut(100).next('.demo-slider')
           .fadeIn(2000).end().appendTo('.second-slider');

       },4000);

     //  $(".demo-slider").fadeOut("slow");
    //  $(".demo-slider").each(function(index){
    //      if(index == 0){
    //      $(this).fadeOut(1000);
    //      }
    //      if(index == 1){
    //          $(this).fadeOut(2000);
    //      }
    //      if(index == 2){
    //          $(this).fadeOut(3000)
    //      }
    //      else {
    //          $(this).fadeIn(1000);
    //      }
    //  });



    });


});