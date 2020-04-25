menu.onclick = function myFunction() {
        var x = document.getElementById("myFunction");
        if (x.className === "topnav" || "logo" || "category") {
            x.className += " responsive";
        }