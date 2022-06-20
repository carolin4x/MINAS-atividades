/*Crie um programa que determine se um número é impar ou par

Dica do sucesso: todo número par é divisível por 2
*/

const numero = prompt("Digite aqui um número: ");
console.log(numero);

const NumeroPar = numero%2;


if (NumeroPar == 0) {
    console.log(`O ${numero} é um número par`);
}
else {
    console.log(`O ${numero} é um número impar`);
}