// to change the iamge 
document.getElementById("demo_img").src = "img/men.jpg";

//  to change the color 
document.getElementById("demo_css_color").style.color = "blue";

// for event listeners
document.getElementById("mybtn").addEventListener('click', showdate);
function showdate(){
    document.getElementById("demo_el").innerHTML = Date();
    document.getElementById("demo_el").style.color = "blue";
    document.getElementById("demo_el").style.fontFamily = "monospace";
    document.getElementById("demo_el").style.fontSize = "25px";
}

// The onmouseover and onmouseout Events

function mouseover (obj) {
    obj.innerHTML = "thanks for hover";

}
function mouseout (obj) {
    obj.innerHTML = "text change";
}

// to create new html element

(
 function addElement() {

     var paragraph = document.createElement('p');
     var node_para = document.createTextNode("i,m new paragraph ");
     paragraph.appendChild(node_para);
     var mydiv = document.getElementById("add_element");
     mydiv.appendChild(paragraph);
    }
) ();
 
// to remove html element

(
    function removeElement () {
        var parent = document.getElementById("remove_div_element");
        var child = document.getElementById("remove_tag");
        parent.removeChild(child);

    }
) ();

