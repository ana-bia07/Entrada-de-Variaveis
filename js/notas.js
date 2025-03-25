document.getElementById("formMedia").addEventListener("submit", calculaMedia);
const $media = document.querySelector(".media");

function calculaMedia(event){
    event.preventDefault();

    let p1 = parseFloat(document.getElementById("p1").value);
    let p2 = parseFloat(document.getElementById("p2").value);
    let media;
    let msg;

    media = (p1 + p2) / 2;
    if(media >= 6){
        msg = "Parabéns, você passou com sucesso";
    }else{
        msg = "Que pena :( Você não tirou o suficiente...Mas não desista!"
    }

    $media.innerHTML =
    `<h3>
        ${media.toFixed(2)} <br>
        ${msg}
    </h3>`;
}