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
        
        // Change eye colour
        let eyeColor = document.getElementById("eyes").value;

        // Change pupil colour
        let blackPupils = document.getElementById("black").checked;
        let whitePupils = document.getElementById("white").checked;
        if (blackPupils == true) {
            // change pupils variable black
        }
        else if (whitePupils == true) {
            // change pupils variable white
        }

        // Change mouth colour
        let mouthColor = document.getElementById("mouth").value;

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