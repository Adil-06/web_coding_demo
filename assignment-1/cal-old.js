
 (function() {
  //  console.log("im start");
    "use strict";
    var el = function(element) {
        if (element.charAt(0) === "#") { // If passed an ID...
          return document.querySelector(element); // ... returns single element
        }
    
        return document.querySelectorAll(element); // Otherwise, returns a nodelist
      };

      // variables
      var viewer = el("#viewer"), // Calculator screen where result is displayed
          equals = el("#equals"), // Equal button
          nums = el(".num"), // List of numbers
          ops = el(".ops"), // List of operators
          theNum = "", // Current number
          oldNum = "", // First number
          resultNum, // Result
         operator; 
   
        // When: Number is clicked. Get the current number selected

        var setnum = function() {
            //console.log("im here");

            if(resultNum) { // reset the result num
                theNum = this.getAttribute("data-num");
               resultNum = "";
            } else {
                theNum += this.getAttribute("data-num");
            }
            viewer.innerHTML = theNum ; // display current num
        };

        // when operator is clicked
        var moveNum = function () {
            oldNum = theNum ;
            theNum = "";
            operator = this.getAttribute("data-ops");

            equals.setAttribute("data-result", ""); //reset the ressult
            

        };

        // when equal is click
        var displayNum = function () {
            // convert string input to number
            oldNum = parseFloat(oldNum);
            theNum = parseFloat(theNum);

            // perform operation
            switch(operator) {

                case "plus" :
                    resultNum = oldNum + theNum;
                    break;
                
                case "minus" :
                    resultNum = oldNum - theNum ;
                    break;

                case "multiply" :
                    resultNum = oldNum * theNum ;
                    break;
                
                case "divide" :
                    resultNum = oldNum / theNum ;
                    break ;
                default :
                resultNum = theNum ;

            }
              // If NaN or Infinity returned
                   if (!isFinite(resultNum)) {
                  if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
                    resultNum = "You broke it!";
                  } else { // If result is infinity, set off by dividing by zero
                  resultNum = "Look at what you've done";
                 el('#calculator').classList.add("broken"); // Break calculator
                     el('#reset').classList.add("show"); // And show reset button
                             }
                         }
  
            // display the result
            viewer.innerHTML = resultNum ;
            equals.setAttribute("data-result", resultNum);

            // reset the oldnum and save the result
            oldNum = 0;
            theNum = resultNum;


        };

        // when clear button click
        var clearAll = function () {
            oldNum = "";
            theNum = "";
            viewer.innerHTML = "0";
            equals.setAttribute("data-result", resultNum);

        };

        // add click event on numbers
        for (var i = 0, l = nums.lenght; i < l; i++) {
            console.log("i,m here");
            nums[i].onclick = setnum;

        }

        // to add click event on operators
        for( var o = 0, len= ops.lenght; o < len; o++) {
            ops[o].onclick = moveNum ;
        }
        // click event to equal sign
        equals.onclick = displayNum ;

        // click event on clear button
        el("#clear_res").onclick = clearAll ;
       
        //click event to reset button
        el("#reset").onclick = function() {
            window.location = window.location;
          };
        


})();