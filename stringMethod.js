console.log("Hi there");

// slice()
const country = "Bangladesh";
const language = country.slice(0, 6)
console.log(language); //// output Bangla


// subsrt()
const subStr = "Apple, Banana, Orange"
const newStr = subStr.substr(7, 6)
console.log(newStr); // output Banana

// replace()
const rep = "I love anny";
const replaced = rep.replace("anny", "Anny")
console.log(replaced); // output I love Anny

// trim()
const remove = "    Hi!   ";
const removed = remove.trim()
console.log(removed); // output Hi! 
