let submitbutton = document.getElementById("submitbutton");
let resetbutton = document.getElementById("resetbutton");

// https://stackoverflow.com/questions/5651933/what-is-the-opposite-of-evt-preventdefault
// https://api.jquery.com/unbind/
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

submitbutton.addEventListener('click', 
    function submit() {
        document.getElementById("drawing").style.display = "block";
        event.preventDefault();
        this.unbind('click').click();
    }
);

resetbutton.addEventListener('click',
    function reset() {
        document.getElementById("drawing").style.display = "none";
    }
)