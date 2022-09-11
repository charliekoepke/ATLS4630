// Will change colour of page when button is pressed
document.getElementById("changeColour").addEventListener("click",
    function changeColour() {
        document.body.style.background = "red";
    }
);

// Will show an alert when button is pressed
document.getElementById("alertButton").addEventListener("click",
    function alertButton() {
        alert("Please do not press this button!");
    }
);

// Will change text when button is pressed
document.getElementById("changeParagraph").addEventListener("click", 
    function changeParagraph() {
        document.getElementById("paragraph").innerHTML = "This is a new paragraph of text: Donec orci ex, sodales quis dolor rutrum, tincidunt facilisis mauris. Integer non dui rutrum, dictum tortor in, ornare lacus. Etiam scelerisque dui at mauris volutpat, et volutpat felis volutpat. Vivamus ac porta erat, eget auctor quam. Nam a ultrices urna. Aliquam erat volutpat. Praesent hendrerit volutpat diam in egestas. Nulla commodo libero non est imperdiet accumsan. Phasellus ullamcorper vel lectus quis congue.";
    }
);