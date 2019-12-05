
// var imgslide = setInterval(SlideImage, 4000);
//  to slide images
//   function SlideImage() {
//   if (curPos == cntImages - 1)
//   curPos = 0;
//   else
//   curPos++;
//   $('#sliderWrapper').animate({
//   'marginLeft': sliderWidth * (-curPos)
//   },2000);
//  }

var currentpos = 0;
var totalimg = document.getElementsByClassName("slider");
var timgLen = totalimg.length;

// to get the total width
for (var w = 0; w < totalimg.length; w++) {
    var sliderWidth = totalimg[w].clientWidth;
}
// console.log(sliderWidth);
    var totalwidth = sliderWidth *timgLen;
console.log("the  width is = "+totalwidth);

var sliderdiv = document.getElementById("sliderWrapper");
sliderdiv.style.width = totalwidth +'px';
 
//var imgslide = setInterval(slideimage, 4000);

 function slideimage () {
  
 if(currentpos == timgLen-1){
      currentpos = 0;
 } else {
     
     currentpos ++;
     //sliderdiv.style.animationName = "move";
   
     sliderdiv.style.marginLeft = sliderWidth*(-currentpos)+'px';
 }

 }
