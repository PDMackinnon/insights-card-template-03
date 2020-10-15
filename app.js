
let d = document;
let t = d.getElementById("toggle");
let t2 = d.getElementById("toggle2");
let flipButton = d.getElementById("flipButton");


d.addEventListener("keydown", e => {
if (e.key === "f") {
    t.checked = !t.checked;
    t2.checked = false;
}

if (e.key === "s") {
    t2.checked = !t2.checked;
    t.checked = false;
    if (t2.checked) {
        //hide flipped button 
        flipButton.style.display = "none";
    }
    else {
        flipButton.style.display = "initial";
    }
}

});