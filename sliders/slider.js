(function(){

    var slides = document.querySelectorAll('#ul .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,3000);
    
    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide showing';
    }
    
    var playing = true;
    var stop = document.getElementById("stopbtn");
    
  function startAgain() {
      stop.innerHTML = "Stop";
      playing = true;
       slideInterval = setInterval(nextSlide,3000);
    
    }
    function pasue() {
        stop.innerHTML = "Start";
         playing = false;
    clearInterval(slideInterval);
   } 

       stop.onclick = function() {
        if( playing) {
            pasue();
        } 
        else {
            startAgain();
        }
    }


})();