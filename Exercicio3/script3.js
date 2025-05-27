let pontosFaltando
var nome = window.prompt("Qual é o seu nome?");
var nota1 = Number(window.prompt("Digite sua nota 1:"));
var nota2 = Number(window.prompt("Digite sua nota 2:"));
var nota3 = Number(window.prompt("Digite sua nota 3:"));


let total = (nota1 + nota2 + nota3) / 3;


alert(nome + ", sua média final é: " + total);


if (total >= 6.0) {
    alert("Parabéns, " + nome + "! Você atingiu a média com " + total);
    alert("Aprovado");
} else {
    pontosFaltando = 6.0 - total;
    alert("Reprovado, " + nome + ". Faltaram " + pontosFaltando + " pontos.");
    
    
    alert("Dá uma olhada nesses cursos: https://www.alura.com.br");
}
