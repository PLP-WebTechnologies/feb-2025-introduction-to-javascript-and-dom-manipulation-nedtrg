// Get references to elements
const changeTextBtn = document.getElementById("changeTextBtn");
const changeStyleBtn = document.getElementById("changeStyleBtn");
const toggleElementBtn = document.getElementById("toggleElementBtn");
const text = document.getElementById("text");
const newElement = document.getElementById("newElement");

// Change text content when the "Change Text" button is clicked
changeTextBtn.addEventListener("click", () => {
  text.textContent = "Text Manipulated!";
});

// Change styles when the "Change Style" button is clicked
changeStyleBtn.addEventListener("click", () => {
  text.style.color = "blue";
  text.style.fontSize = "24px";
  text.style.fontWeight = "bold";
});

// Toggle visibility of the new element when the "Toggle Element" button is clicked
toggleElementBtn.addEventListener("click", () => {
  if (newElement.style.display === "none") {
    newElement.style.display = "block";
  } else {
    newElement.style.display = "none";
  }
});
