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

    // code for new slider
    var incrementindex = 0;
    var startimageshirt=  setTimeout(secSlide,3000);

    function secSlide()
    {
        var  imgarray = document.getElementsByClassName('slide-image');
        for( i = 0; i <  imgarray.length; i++)
        {
          imgarray[i].style.display = "none";
        }
        incrementindex++;
        if(incrementindex > imgarray.length){ incrementindex = 1 }
        imgarray[incrementindex - 1].style.display = 'block';
          startimageshirt =  setTimeout(secSlide,3000);
    }

    
    var btnclick = document.getElementById("btnSlide");
    btnclick.addEventListener("click", secSlide);

    var stopslide = document.getElementById("stopSlide");
    stopslide.onclick = function stopshirtImages(){
        console.log("in stop slide");
        clearTimeout (startimageshirt);

    }

})();