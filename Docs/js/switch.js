function jourDeLaSemaine(){
    let date1 = new Date();
    let date2 = parseInt(date1.getDay());
    const jourValue = date2
    switch(jourValue) {
        case 1:
            console.log("lundi");
            break;
        case 2:
            console.log("mardi");
            break;
        case 3:
            console.log("mercredi");
            break;
        case 4:
            console.log("jeudi");
            break;
        case 5:
            console.log("vendredi");
            break;
        case 6:
            console.log("samedi");
            break;
    }
/*     console.log(date1);
    console.log(date2); */
};

document.getElementById('submit').addEventListener("click", function (){
    jourDeLaSemaine();
})