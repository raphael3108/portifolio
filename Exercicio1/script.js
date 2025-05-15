let num1;
let num2;
let resultado;
let parOuImpar

num1 = Number(window.prompt("Digite o primeiro numero : "));

num2 = Number(window.prompt("Digite o segudo numero : "));

resultado = num1 + num2;

/*if(resultado > 10) {
    alert("o número" + resultado + "é maior do que 10 ! ");
} else {
    alert("o número" + resultado + ",é menor ou igual a que 10 ! ");
}*/

parOuImpar = resultado % 2;

if(parOuImpar == 0) {

    alert("o numero " + resultado + " é par ") ;

} else {

    alert("o numero " + resultado + " é impar ") ;
}
