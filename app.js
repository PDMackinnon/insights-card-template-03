
let d = document;
let t = d.getElementById("toggle");

d.addEventListener("keydown", e => {
if (e.key === "f") {
    t.checked = !t.checked;
}

});