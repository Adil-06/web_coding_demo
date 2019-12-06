
(function(){

    // required variables
    var currentpos = 0;
    var totalimg = document.getElementsByClassName("slider");
    var timgLen = totalimg.length;

  // to get the total width
  for (var w = 0; w <= totalimg.length-1; w++) {
      var sliderWidth = totalimg[w].clientWidth;
    }

  //setting and getting width of slider wrapper
  var totalwidth = sliderWidth *timgLen;
  console.log("the  width is = "+totalwidth+"px");
  var sliderdiv = document.getElementById("sliderWrapper");
  sliderdiv.style.width = totalwidth +'px';

 // to start slideshow
  var imgslide = setInterval(slideimage, 5000);

 function slideimage ()
  {
      if(currentpos == timgLen-1) {
          currentpos = 0;
        } else {
            var first = sliderdiv.firstChild;
            currentpos ++;
            sliderdiv.style.marginLeft = sliderWidth*(-currentpos)+'px';
            sliderdiv.style.transition = '5s';
            sliderdiv.appendChild( first);
        }
    }

  // to stop start
     var startStop = document.getElementById("btnstop-start");
     startStop.addEventListener("click" , stopSliding);
     function stopSliding () {
         console.log("images stop");
         clearInterval(imgslide);
     }


//end
 })();