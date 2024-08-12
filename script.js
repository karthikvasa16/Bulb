document.getElementById("Onbutton").addEventListener("click", function() {
    var bulb = document.getElementById("bulb");
    bulb.src = "bulb_on.png";
});

document.getElementById("Offbutton").addEventListener("click", function() {
    var bulb = document.getElementById("bulb");
    bulb.src = "bulb_off.png";
});
