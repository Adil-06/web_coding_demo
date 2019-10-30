$(document).ready(function(){

    //to change the text and creating new pargraph / heading with jquery
    $("#btn-change").click( function(){ 
        var textele = $("<p></p>").text("I'm new paragraph");

        $("#demo-change").text("I'm Changed");
        $("#demo-change").attr("title", "this text is changed");
        $("#demo-change").after(textele);
        
      //  $("div").append(textele);
      var new_h1 = $("<h3></h3>").html("i'm new heading");
      $(".add-ele").append(new_h1);
      $("h3").attr("title" , "im new heading created via jquery");

    });

    // to remove elements
    $("#demo-remove").click( function(){
      $(this).remove();

    });

    //adding css using jqery
    $("#demo-css-jq").css({
      "background-color": "#bf80ff" ,
      "text-align": "center",
      "margin": "10px",
      "font-size": "20px",
      "color": "white"
    });

    // seting a height and width
    $("#demo-css-jq").height('70px').width('50%');

    // to add class to element
    $("#demo-css-jq").addClass("css-div");
    
    // for travaersing the elements
    $("span").parents("ol").css("border", "2px solid #5f2d2d");
    $("span").parentsUntil("ol").css("color", "#2d2df3e0");

    // use of filter method
    $("p").filter(".demo-filter").css({"font-size" : "20px",   "font-family" : " monospace"});
      


});