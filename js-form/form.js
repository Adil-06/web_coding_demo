(function(){

 var submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click", validation);
function validation()
 {
    var email = document.forms["infoForm"]["email"].value;
    var pasword = document.forms["infoForm"]["pwd"].value;
    var conformpas = document.forms["infoForm"]["conform"].value;
    var phone = document.forms["infoForm"]["number"].value;
    var checkbox = document.getElementById("checkbox").checked;
    var emailregx = /^\S+@\S+\.\S+$/;
    var phoneregx = /^\d{10}$/;

    if( (email == null || email == "" || email == " ") || ( emailregx.test(email) == false) )
    { 
     alert("enter your correct  email which contain .com and @"); 
    }    
    // check for pasword
     else  if(pasword == null || pasword == "" )
    {
       alert('provide password');
    } 
    // check for conformpas
   else if ( conformpas == null || conformpas == "") 
    {
        alert ("please type your password again");
    }
    else if(pasword != conformpas){
        alert("password and conform password must be same");

    }
    // check for phone
    else if(( phone == null || phone =="" || phone == " ") || phoneregx.test(phone) == false)
    {
        alert ("provide your correct phone number");
    } // checkbox
    else if(checkbox == false){
        alert ("please tick the agreement");
    } else {
        alert("you can submit the form");
    }


}

})();