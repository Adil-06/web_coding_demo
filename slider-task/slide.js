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
    // gettext[0].html ="text";
    });

// $(function(){
    
//     $('#ul .slide-text:gt(0)').hide();
//     setInterval(function(){
//       $('#ul :first-child').fadeOut(1000).next('.slide-text').fadeIn(2000)
//       .end().appendTo('#ul');
//   }, 5000);
    
//   });
 
});