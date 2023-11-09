const start = document.getElementById("start_button");

start.addEventListener("click",function (){
    for (i=0; i<=11; i++){
        secondes = i;
        aiguille(i)
        window.setTimeout(start,1000);
    }
});


function aiguille(i){
    let div_name = "h_" + i;
    console.log(div_name);
    let div_to_color = document.getElementById(div_name);
    if (div_to_color.innerHTML == i){
        div_to_color.style.backgroundColor = "red";
    }

let minutes = 0;
let secondes = 0;
}