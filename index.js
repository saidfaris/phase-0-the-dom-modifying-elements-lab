// Write your code here!
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "YOUR-NAME is the champion";
const mainNode = document.getElementById("main");
mainNode.remove();
document.body.appendChild(newHeader);
