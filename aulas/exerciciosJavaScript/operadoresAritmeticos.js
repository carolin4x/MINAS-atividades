const num1 = parseInt(prompt("Digite o primeiro numero")); //toda vez que utilizamos somente o prompt, ele vai entender que o que vamos digitar é uma String, independente de ser numero.
const num2 = parseInt(prompt("Digite o segundo numero")); //ao utilizarmos o psreInt eu informo que QUALQUER dado inserido nno navegador será um Integer. 

const modulo = num1 % num2;
console.log(`O modulo da divisão é: ${modulo}.`);

const soma = num1 + num2;
console.log(`A soma de num1 + num2 é: ${soma}.`);

const subtracao = num1 - num2;
console.log(`A subtração de num1 + num2 é: ${subtracao}.`);

const multiplicacao = num1 * num2;
console.log(`A multiplicacao de num1 + num2 é: ${multiplicacao}.`);

const divisao = num1 / num2;
console.log(`A divisao de num1 + num2 é: ${divisao}.`);

