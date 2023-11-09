let fibo = [1,1,2,3,5,8];
console.log(fibo);

document.getElementById("submit").addEventListener("click", function() {
    console.log(fibo);
});

document.getElementById("submit2").addEventListener("click", function() {
    let to_add_start = 0;
    let to_add_end = 13;
    let lengthfibo = fibo.length;/* empecher boucle infini car dans la fct : on ajoute des elems > donc length++ */
    let is_in = false; /* check if is in array par defaut, false boolean */
    for (i=0; i<lengthfibo; i++){
        if (fibo[i] == to_add_start || fibo[i] == to_add_end){
            is_in = true;
            break;
        }
    }
    if (!is_in) {
        fibo.unshift(to_add_start);
        fibo.push(to_add_end);
    }
    console.log(fibo);
});

document.getElementById("submit3").addEventListener("click", function() {
    for (i=0; i<fibo.length; i++){
        fibo[i] = fibo[i] % 4;
    }
    console.log(fibo);
});

document.getElementById("submit4").addEventListener("click", function() {
    fibo.sort((a,b) => a-b) /* Sorting an array ->>>> COMPARE METHOD a - b car les elements sont du txt" */
    console.log(fibo);
});
