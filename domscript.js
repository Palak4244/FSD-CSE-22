function addParagraph() { 
  const para = document.createElement("p");
  para.innerText = "This is a new paragraph added using DOM manipulation.";
  para.style.color = "blue";
  const el = document.getElementById("para");
  el.appendChild(para);
}
function removeParagraph() {
  const el = document.querySelector("p");
  const parent=document.getElementById("para");
    parent.removeChild(el);
  }
function removeAllParagraphs() {
  const el = document.querySelectorAll("p");
  const parent = document.getElementById("para");
  parent.remove(el);
}