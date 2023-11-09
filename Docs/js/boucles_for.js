const result = document.getElementById("result");
const table = document.createElement("table");
const row = document.createElement("tr");

document.getElementById("create").addEventListener("click",function() {
    boucle1();
});

function boucle1() {
    for (let i=1; i<=3; i++){
        const cell = document.createElement("td");
        row.appendChild(cell);
        cell.textContent = i;
        cell.style.padding = "2em";
        cell.style.border = "2px solid black";
    }
    table.appendChild(row);
    result.appendChild(table);
};


document.getElementById("create2").addEventListener("click",function() {
    let howmany = parseInt(prompt("Combien d'elements ? : "));
    result.innerHTML = "";
    for (let i=1; i<=howmany; i++){
        table.appendChild(row);
        const cell = document.createElement("td");
        row.appendChild(cell);
        cell.textContent = i ** 2;
        cell.style.padding = "2em";
        cell.style.border = "2px solid black";
    }
    table.appendChild(row);
    result.appendChild(table);
});