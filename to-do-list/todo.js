(function() {

var addbtn = document.getElementById('btn_add');
addbtn.addEventListener("click" , addToList);


function addToList() {
    
   var enterydata = document.getElementById("entery").value;
   enterydata.trim();
    
   if(enterydata == null || enterydata == "" || enterydata == " ") {
        alert ("Please Add something to your TODO list");
    }
    else 
    { 
     // creating new list element
        var newEntery = document.createElement("li");
        var newEnteryData = document.createTextNode(enterydata);
         newEntery.appendChild(newEnteryData);
  
         // to show in div
         var enteryDiv = document.getElementById("entDiv");
         enteryDiv.appendChild(newEntery);
         document.getElementById("entery").value = "";

         // create a button to del listed item
         var delBtn = document.createElement("button");
         var delBtnText = document.createTextNode("Delete");
         delBtn.appendChild(delBtnText);
         newEntery.appendChild(delBtn);

     // call a itemstyle function
     itemStyle();
        
    }

 // itemstyle fun
  function itemStyle() {
    // style for delete button
    delBtn.style.backgroundColor = "#08afaf";
    delBtn.style.color = "white";
    delBtn.style.height = '25px';
    delBtn.style.width = "auto";
    delBtn.style.borderColor = "steelblue";
    delBtn.style.margin = '5px 5px 0px 10px';
    delBtn.style.borderRadius = "10px";
    
    // style for the new list item
    newEntery.style.backgroundColor = 'white';
    newEntery.style.width = "fit-content";
    newEntery.style.height = "35px";
    newEntery.style.margin = ' 15px 0px 0px 241px';
   newEntery.style.textAlign ="left";
   newEntery.style.paddingLeft = "5px";
   newEntery.style.borderRadius = "10px";
   newEntery.style.border = " 1px solid black";
}

 // remove eventlistener
 var removeitem = delBtn.addEventListener ("click" , removeitem);

// remove item fun
    function removeitem() {
    enteryDiv.removeChild(newEntery);

    }

}

})();