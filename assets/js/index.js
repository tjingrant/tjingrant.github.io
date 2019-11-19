var clickable = document.getElementsByClassName("clickable");
var numClickable = clickable.length;

for (var i = 0; i < numClickable; i++) {
  if (i > 0) {
    clickable[i].parentNode.querySelector("div").style.display = "none";
  }

  clickable[i].addEventListener("mouseenter", function(event) {   
    event.target.style.textDecoration = "underline";
    event.target.style.cursor = "pointer";
  });

  clickable[i].addEventListener("mouseout", function(event) {   
    event.target.style.textDecoration = "";
    event.target.style.cursor = "";
  });

  clickable[i].addEventListener("click", function(event) {
    var displayDiv = event.target.parentNode.querySelector("div");
    if (!displayDiv.style.display) {
      displayDiv.style.display = "none";
    } else {
      displayDiv.style.display = "";
    }
  });
};
