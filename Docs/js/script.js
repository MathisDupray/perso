const button = document.getElementById("submit_button");
const result = document.getElementById("calcul_result");

function ask_user() {
    let height = parseInt(prompt("Largeur ? : "));
    let width = parseInt(prompt("Longueur ? : "));
/*     console.log(height);
    console.log(width); */
    if (isNaN(height) || isNaN(width)) {
        alert("Error, please put integers");
    }
    else {
        let perimeter = width*height;
        result.innerHTML += perimeter + "m = perimeter";
    }
}

button.addEventListener("click", ask_user)


/* -+*---------------------------------------
-------------------------------------------------
------------------------------------------------- */


