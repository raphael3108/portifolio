let cliques = 0;
const mostraHTML = document.getElementById("mostraHTML");

function atualizarVisor() {
  mostraHTML.textContent = `Número de cliques: ${cliques}`;
}

function contador() {
  cliques++;
  atualizarVisor();
  console.log(cliques);
}

function zerar() {
  cliques = 0;
  atualizarVisor();
  console.log(cliques);
}
