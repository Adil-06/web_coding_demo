(function(){

    var slides = document.querySelectorAll('#ul .slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide,3000);
    
    function nextSlide() {
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide showing';
    }

    var satrt = document.getElementById("startbtn");
    satrt.onclick = function(){
        //setInterval(nextSlide,3000);
    }
var stop = document.getElementById("stopbtn");
 stop.onclick = function(){
     clearInterval(slideInterval);
 }
})();