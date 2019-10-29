$(document).ready(function(){
   // for pargraph hide
    $("p.para-hide").click( function(){
        $(this).hide();

    });

   // for click
    $("h2").click( function(){
        $(this).css("background-color", "yellow");
    });

    // for double click
    $("pre").dblclick( function(){
        $(this).css("font-size", "20px");
        $(this).css("color", "red");
    });

    // for hover function
    $("#demo-hover").hover( function(){
        document.getElementById("demo-hover").style.backgroundColor = "lightgray";
    },
    function(){
        document.getElementById("demo-hover").style.color ="green";
        document.getElementById("demo-hover").style.textAlign = "center";
        document.getElementById("demo-hover").innerHTML = "thanks for hover";

    });

    // for on method
    $("#demo-on").on({
        mouseenter: function(){
          $(this).css("background-color", "lightgray");
          document.getElementById("demo-on").style.maxWidth = "30%";
        },  
        mouseleave: function(){
          $(this).css("background-color", "lightblue");
        }
      });

      //for toggle function
      $(".btn-toggle").click( function(){
          $("#demo-toggle").toggle(500);
      });

      // for fade method
      $(".demo-fade").click(function(){
          $(this).fadeTo("1000", 0.5);
      });
     
      // for animate method
      $(".demo-animate").click(function(){
          var h = $(".demo-animate");
          h.animate({fontSize: '30px'}, "slow");
          h.animate({opacity:'0.5'});
      });
      // for slide and stop slide
      $("#slidedown").click(function(){
          $("#panel").slideToggle(5000);
      });
      $("#stopslide").click( function(){
        $("#panel").stop();

      });

});