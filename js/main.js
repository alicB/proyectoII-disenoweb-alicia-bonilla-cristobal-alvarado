$(function() {





});


/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    if (document.getElementById("chatbot").offsetHeight == 2) {
        document.getElementById("chatbot").style.height = "250px";
        document.getElementById("cbody").style.height = "200px";
        document.getElementById("close").removeAttribute('hidden');
        document.getElementById("texto").style.color = "black";
        document.getElementById("button1").style.marginBottom = "250px";
    } else {
        document.getElementById("chatbot").style.height = "0";
        document.getElementById("cbody").style.height = "0";
        document.getElementById("texto").style.color = "white";
        document.getElementById("close").setAttribute('hidden', '');
        document.getElementById("button1").style.marginBottom = "0px";
    }

}