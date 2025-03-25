document.getElementById("formImc").addEventListener("submit", calcularImc);
const $resultado = document.querySelector(".resultado");

function calcularImc(event){
    event.preventDefault();

    let peso = parseFloat(document.getElementById("peso").value);
    let altura =  parseFloat(document.getElementById("altura").value);
    let imc;
    let msg;

    imc = peso / Math.pow(altura, 2);
    
    if(imc < 18.5) {
        msg = "Magraza Grau de obesidade 0";
    }else if(imc >= 18.5 && imc <=24.9){
        msg = "Normal. Grau de Obesidade 0";
    }else if(imc >= 25 && imc <=29.9){
        msg = "Sobrepeso. Grau de Obesidade 1";
    }else if(imc >= 30 && imc <= 39.9){
        msg = "Obesidade. Grau de Obesidade 2";
    }else if(imc >= 40){
        msg = "Obesidade grave. Grau de Obesidade 3";
    }else{
        msg = "Não foi possivel calcular, reveja as informações inseridas";
    }

    $resultado.innerHTML = 
    `<h3>
        ${imc.toFixed(2)}<br>
        Classifição: ${msg}
    </h3>`
}