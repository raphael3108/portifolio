let cliques = 0;
let mostraHTML=document.getElementById("mostraHTML");

function contador() {


    cliques= cliques + 1;

    mostraHTML.innerHTML = `<p> Números de cliques : ${cliques} </p>`;
    console.log(cliques)
}