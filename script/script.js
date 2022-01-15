    $(document).ready(function(){

  $("#u").click(function(){
    //   alert("hh");
   $("#call").show(2000);
  });

 $("#v").click(function(){
//   alert("gg");
   $("#call").hide(2000);
 });

 setTimeout(function(){
   $(".loader").slideUp(2000);
 },4000);



 

});

function myFunction(x) {
  var a=document.getElementById("call");
  if (x.matches) { // If media query matches
   a.style.display = "none";
  } else {
  a.style.display = "";
  }
}

var x = window.matchMedia("(max-width: 1024px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
