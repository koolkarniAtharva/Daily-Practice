var h1 = document.querySelector("h1");

console.log(h1);

h1.innerHTML = "I am Batman!";

h1.style.color = "gold";
h1.style.backgroundColor = "black";

h1.addEventListener("dblclick", function() {
    console.log("I am Batman!");
});