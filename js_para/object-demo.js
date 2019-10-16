(function() {
    console.log("im start");
})();


 var person = { fName:"alex",
             lName :"hale",
            gender:"male",
            age :"30",
            get fullname (){ 
                var name = this.fName + "  " + this.lName;
                return  name.toUpperCase();

            }
    } ;

var update_obj = person;
update_obj.age = 20;
// the use of getter method
document.getElementById("fn").innerHTML = person.fullname;

// for accessing obj property
document.getElementById("info_demo").innerHTML = "the name is = " +person.fName +"  " + "and " + "age is = " +person.age;

// adding new property in object
person.nationality = "english";

// for in loop 
var x ;
var res = "";
for (x in person) {
   res += person[x] + "<br>";
}

document.getElementById("full_info").innerHTML = res.toUpperCase();


//console.log('im here.....');

 // for The window.location object 
( function () {

    document.getElementById("win_loc_href").innerHTML = "the url is = " + window.location.href ;
    document.getElementById("demo_hostname").innerHTML = window.location.hostname;
     document.getElementById("demo_protocol").innerHTML = window.location.protocol;
     document.getElementById("demo_navigator").innerHTML = navigator.appName;
    } 
)();