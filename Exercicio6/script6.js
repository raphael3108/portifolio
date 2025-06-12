let cliques = 0;
let mostraHTML = document.getElementById("mostraHTML");

function contador() {
    cliques = cliques + 1;
    mostraHTML.innerHTML = `<p>Número de cliques: ${cliques}</p>`;
    console.log(cliques);
}

function zerar() {
    cliques = 0;
    mostraHTML.innerHTML = `<p>Número de cliques: ${cliques}</p>`;
    console.log(cliques);
}
