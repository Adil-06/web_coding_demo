
$(function() {
  //  console.log("inside");
    
     var curPos = 0;
      var slider = $('.slider');
      var cntImages= slider.length;
      var sliderWidth = slider.width();
     
      $('#sliderWrapper').css('width', sliderWidth * cntImages);
     
      var imgslide = setInterval(SlideImage, 4000);
    // to slide images
      function SlideImage() {
      if (curPos == cntImages - 1)
      curPos = 0;
      else
      curPos++;
      $('#sliderWrapper').animate({
      'marginLeft': sliderWidth * (-curPos)
      },2000);
     }

     // to stop slider
     $(".btnstop").click(function(){
         clearInterval(imgslide);

     });
     // start btn
     $(".btnstart").click(function(){
      imgslide =setInterval(SlideImage, 4000);
        

    });
    

    });