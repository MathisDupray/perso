const a = 3;
const b = 2;
const multiplieur = document.getElementById("multiplie_button");

multiplieur.addEventListener("click", multiplie);
function multiplie(x) {
    if (isNaN(x)) {
        x = 8;
    }
    return x * 3;
}

multiplieur.addEventListener("click", affiche);

function affiche() {
    alert(multiplie(a))
    alert(multiplie(b))
    alert(multiplie())
}