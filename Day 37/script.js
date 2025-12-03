const p = document.querySelector("p");
const Text = p.innerText; 

const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;
let interval = null; // Variable to store the interval ID

function randomText() {
    
    const str = Text.split("").map((letter, index) => {
        if (index < iteration) {
            return Text[index];
        }
        return char[Math.floor(Math.random() * 52)];
        
    }).join("");

    p.innerText = str;

    // Check if animation is complete
    if (iteration >= Text.length) { 
        clearInterval(interval); // Stop the loop
        p.innerText = Text; // Ensure final text is clean
    }

    iteration += 0.3; // Adjust speed (smaller number = smoother/slower)
}

// Store the interval ID so we can stop it later
interval = setInterval(randomText, 30);