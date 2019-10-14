console.log("im start");
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


console.log('im here.....');
  // for js functions

  var fun = function ( a,b)  { return a * b  } ;
   //document.getElementById("demo").innerHTML = fun(12 , 8);
   
   var z = fun(3,7);
document.getElementById("demo").innerHTML = z;
   