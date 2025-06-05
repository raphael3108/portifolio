let inscritos = 0;

function inscrever() {
    inscritos++;
    const equipes = Math.floor(inscritos / 3);

    document.getElementById("inscritos").innerText = inscritos;
    document.getElementById("equipes").innerText = equipes;

    if (equipes >= 4 && inscritos % 3 === 0) {
        alert("Campeonato confirmado! Já temos pelo menos 4 equipes.");
    }
}
