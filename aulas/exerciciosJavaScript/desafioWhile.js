const arrayNumero = [];
let numero;

//aqui eu coloco o 'do' pra primeiro saber o numero digitado, para só depois executar a mensagem
do {  
    numero = parseInt(prompt("Digite o numero: "));
    arrayNumero.push(numero);
} while (numero > 0)
alert ("Você digitou " + arrayNumero.length + " números.");

const qtdNumerosDigitados = numeros.length;

let somaNumerosDigitados = 0;
for (let i = 0; i < qtdNumerosDigitados; i++) { 
    somaNumerosDigitados = somaNumerosDigitados + numeros[i];
}