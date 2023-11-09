function soustrait() {
    let x = parseInt(prompt("valeur de x ? : "));
    if (x >= 0) {
        x = x - 2;
        console.log(" if x >= 0 result subs : " + x);
    } else {
        alert("Nombre negatif!");
    }
}

document.getElementById("submit").addEventListener("click", function() {
    soustrait();
    affiche();
});

function affiche() {
    let x = parseInt(prompt("valeur de x v2 ? : "));
    const first = parseInt(document.querySelector("td:first-child").textContent);
    const last = parseInt(document.querySelector("td:last-child").textContent);
    console.log("resultat de " + x + " - " + first + " = " + (x - first));
    console.log("resultat de " + x + " - " + last + " = " + (x - last));

}