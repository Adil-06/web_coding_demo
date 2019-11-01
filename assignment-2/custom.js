(function(){

   
    var submitBtn = document.getElementById("subBtn");
    submitBtn.addEventListener("click", checkformValidation);
     
    function checkformValidation(){
        var email = document.forms["myform"]["email"].value;
        var pasword = document.forms["myform"]["pwd"].value;
      //  var len = pasword.length;
        var pwdregx =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,50}$/;
        var emailregx = /^\S+@\S+\.\S+$/;
        if( (email == null || email == "" || email == " ") || ( emailregx.test(email) == false) )
         {
            //alert("enter correct email");
            document.getElementById("email_error").innerHTML = "enter correct email";
            return false;
        } 
        else if( pasword == null || pasword == "" || ( pwdregx.test(pasword) == false ) ) 
        {
           // alert("Your password have atleast 4 characters");
            document.getElementById("pwd_error").innerHTML = "your password must contain Uppercase Lowercase digits and Special character";
            return false;

        }
         else { console.log(" you can submit form");}
         return false ;
        
     }
  // for sending data to resultant div
  submitBtn.addEventListener("click", userData);
  function userData(){
     // console.log("in side userdata method");
      var entemail = document.getElementById("email").value;
      var entpassword = document.getElementById("pwd").value;
       document.getElementById("res_email").innerHTML = " Your Email is : " +entemail;
       document.getElementById("res_password").innerHTML = "Yor password is : " +entpassword;

  }
  // to clear the input fields
  submitBtn.addEventListener("click" ,clearinput);
  function clearinput()
  {
      document.forms["myform"]["email"].value = "";
      document.forms["myform"]["pwd"].value = "";
    }

})();