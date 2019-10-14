// to change the iamge 
document.getElementById("demo_img").src = "img/men.jpg";

//  to change the color 
document.getElementById("demo_css_color").style.color = "blue";

// for event listeners
document.getElementById("mybtn").addEventListener('click', showdate);
function showdate(){
    document.getElementById("demo_el").innerHTML = Date();
}