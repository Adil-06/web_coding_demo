$(document).ready(function(){

    //to change the text and creating new pargraph with jquery
    $("#btn-change").click( function(){
        var textele = $("<p></p>").text("I'm new paragraph");

        $("h2").text("I'm Changed");
        $("h2").attr("title", "this text is changed");

        $("h2").after(textele);
        
      //  $("div").append(textele);

    
    });


});