let gender = prompt("Are you a boy or a girl? (Type 'boy' or 'girl')");

if (gender) {
  gender = gender.toLowerCase().trim();

  if (gender === "boy" || gender === "girl") {
    alert(`You selected: ${gender}`);
  } else {
    alert("Please type only 'boy' or 'girl'!");
  }
}else {
  alert("HUH! You didn't type anything!");
}

alert("Dont you dare to Open the Browser Console");

let openConsole = false;
const threshold = 200;

setInterval(() => {
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    if (widthDiff > threshold || heightDiff > threshold) {
        if (!openConsole) {
            openConsole = true;
            alert("Hey!I told you Not to open the console !");
            if(gender === "boy"){
                console.log("%cBad Boy! 😈", "color: yellow; font-size: 30px; font-weight: bold;");
            }
            else if (gender === "girl") {
                console.log("%cBad Girl! 😈", "color: yellow; font-size: 30px; font-weight: bold;");
            }
            else{
                console.log("%cYou are Naughty person! 😈", "color: yellow; font-size: 30px; font-weight: bold;");
            }
        }
    }
}, 100);
