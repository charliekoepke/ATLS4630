let submitButton = document.getElementById("submitbutton");
let resetButton = document.getElementById("resetbutton");

// https://stackoverflow.com/questions/5651933/what-is-the-opposite-of-evt-preventdefault
// https://api.jquery.com/unbind/
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

submitButton.addEventListener('click', 
    function submit() {
        document.getElementById("drawing").style.display = "block";

        // Frog name
        let frogName = document.getElementById("name").value;
        document.getElementById("heading").innerHTML = frogName.toString();

        // Change body colour
        let bodyColor = document.getElementById("body").value;
        document.querySelector("html").style.setProperty("--skin", bodyColor);
        
        // Change eye colour
        let eyeColor = document.getElementById("eyes").value;
        document.querySelector("html").style.setProperty("eye", eyeColor);

        // Change pupil colour
        let blackPupils = document.getElementById("black").checked;
        let whitePupils = document.getElementById("white").checked;
        if (blackPupils == true) {
            console.log("black pupils");
            document.querySelector("html").style.setProperty("pupil", "black");
        }
        else if (whitePupils == true) {
            console.log("white pupils");
            document.querySelector("html").style.setProperty("pupil", "white");
        }

        // Change mouth colour
        let mouthColor = document.getElementById("mouth").value;
        document.querySelector("html").style.setProperty("mouth", mouthColor);

        // Frog saying
        let frogSaying = document.getElementById("frogsaying").value;
        document.getElementById("saying").innerHTML = frogSaying.toString();

        event.preventDefault();
        this.unbind('click').click();
    }
);

resetButton.addEventListener('click',
    function reset() {
        document.getElementById("drawing").style.display = "none";
    }
)