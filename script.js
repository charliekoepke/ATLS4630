document.getElementById("openbutton").addEventListener("click",
    function openNav() {
        console.log("opening menu")
        document.getElementById("sidenav").style.width = "25em";
    }
);

document.getElementById("closebutton").addEventListener("click",
    function closeNav() {
        console.log("closing menu");
        document.getElementById("sidenav").style.width = "0px";
    }
);