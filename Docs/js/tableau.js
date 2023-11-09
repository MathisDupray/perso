function additionne(x) {
    let result_add = x + 2;
    return result_add;
}

const first = document.getElementById("premier").textContent;
const dernier = document.getElementById("dernier").textContent;
const button = document.getElementById("addition_button");

button.addEventListener("click", function() {
    const first = parseInt(document.querySelector("td:first-child").textContent);
    const last = parseInt(document.querySelector("td:last-child").textContent);
    alert("Le resultat de l'addition de " + first + " et 2 :" + additionne(first));
/*     let add_last = last + additionne(first);
 *//*     alert("Le resultat de l'addition de " + additionne(first) + " et de " + last + " est : " + add_last);
 */ /* additionne result + last au lieu de last + 2 */
    alert("Le resultat de l'addition de " + last + "et de 2 est : " + additionne(last));
});