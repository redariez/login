//EXAMINE THE DOCUMENT OBJECT //
//console.dir(document);

console.log(document.head);

var header = document.getElementById("main-header");
header.style.borderBottom = "solid 5px #000";

var title = document.getElementsByClassName("title");
title.innerText = "<h2>ade</h2>";
