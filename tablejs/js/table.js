(function (){

// cresating and styling div

var newDiv = document.createElement("div");
var divText = document.createTextNode("This is table div.");
newDiv.appendChild(divText);

var elementbody = document.body;
elementbody.appendChild(newDiv);

newDiv.setAttribute("id", "tableDiv");

newDiv.style.height = '200px';
newDiv.style.width = '60%';
newDiv.style.backgroundColor = "lightblue";
newDiv.style.marginLeft = 'auto';
newDiv.style.marginRight = 'auto';
newDiv.style.padding = '15px';

// end of div element
 
// creating table
var mytable = document.createElement("table");
mytable.style.border = "1px solid black";
mytable.style.borderCollapse = 'collapse';
mytable.style.width = "40%";
mytable.style.height= "20%";
mytable.setAttribute('id','table');

// append div and table
newDiv.appendChild(mytable);

// insert row 1 
(function(){
var row1 =  mytable.insertRow(0);

var r1cell1 = row1.insertCell(0);
var r1cell2 = row1.insertCell(1);
var r1cell3 = row1.insertCell(2);
r1cell1.innerHTML = "<b> First name</b>";
r1cell2.innerHTML ="<b> Last name</b>";
r1cell3.innerHTML= "<b> Age </b>";

// style for row 1

r1cell1.style.border = '1px solid ';
r1cell2.style.border = '1px solid ';
r1cell3.style.border = '1px solid ';
row1.style.backgroundColor = "#c4c434";
row1.style.border ='1px solid black';
row1.style.textAlign ='center';
})();

// insert 2 row
(function(){
var row2 = mytable.insertRow(1);

r2cell1 = row2.insertCell(0);
r2cell2 = row2.insertCell(1);
r2cell3 = row2.insertCell(2);
r2cell1.innerHTML = "java";
r2cell2.innerHTML = "script";
r2cell3.innerHTML = "20";

//style for row 2 
    
r2cell1.style.border = '1px solid ';
r2cell2.style.border = '1px solid ';
r2cell3.style.border = '1px solid ';
row2.style.border= '1px solid black';
row2.style.textAlign ='center';

})();

// insert row 3
(function(){
var row3 = mytable.insertRow(2);

r3cell1 = row3.insertCell(0);
r3cell2 = row3.insertCell(1);
r3cell3 = row3.insertCell(2);
r3cell1.innerHTML = "ecma5";
r3cell2.innerHTML = "typescript";
r3cell3.innerHTML = "30";

// style for row3
    
r3cell1.style.border = '1px solid ';
r3cell2.style.border = '1px solid ';
r3cell3.style.border = '1px solid';
row3.style.border = '1px solid black';
row3.style.textAlign ='center';

})();


// end of main self call function
})();