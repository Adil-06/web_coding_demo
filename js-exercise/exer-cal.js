

var input = document.getElementById("inputVal");
// to show num
 function showNum(obj) {
     // console.log("inside shownum");
    var store = obj.innerHTML;
    if (store == '=') {
       // console.log('1st if');
        input.innerHTML = eval(input.innerHTML);
    } else if (store == 'C') {
        input.innerHTML = '0';

    } 
    else {
        if (input.innerHTML == '0') {
          //  console.log("2nd if");
            input.innerHTML = store;
        } else {
            input.innerHTML = input.innerHTML + store;
        }
    }
}



