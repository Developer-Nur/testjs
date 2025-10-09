const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Watermelon",
  "Papaya",
  "Kiwi",
];

const fLength = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLength; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("ulLi").innerHTML = text;
