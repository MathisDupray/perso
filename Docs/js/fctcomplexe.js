const submit = document.getElementById('submit');
const submit2 = document.getElementById('submit2');
const submit3 = document.getElementById('submit3');
const pi = 3.14159265358979324;

function ask_rayon () {
    let rayon = parseInt(prompt("rayon ? : "))
    let superficie = rayon ** 2 * pi
    console.log(superficie + " cm²");
    return superficie;
}

submit.addEventListener("click", function (){
    ask_rayon();
});

submit2.addEventListener("click", function (){
    calc_am();
});


/* Pythagore ou AB = R*2 */
/*  AM² = (2R -x) +  */

function calc_am(R,x){
    let am = 2 * R * (R+x);
    console.log(am);
    return am;
}