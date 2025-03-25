document.getElementById("formDolar").addEventListener("submit", converterReal);
const $conversao = document.querySelector(".conversao");

function converterReal(event){
    event.preventDefault();

    let r = parseFloat(document.getElementById("r").value);
    let d = parseFloat(document.getElementById("d").value);
    let totalD;

    totalD = r / d;
    $conversao.innerHTML = 
    `<h3>
        ${totalD.toFixed(2)} Dolares.
    </h3>`
}