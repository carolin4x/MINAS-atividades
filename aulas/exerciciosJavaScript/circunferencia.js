/*
 * Crie um programa para medir o comprimento da circunferencia
 * Comprimento = 2* PI * R
 * PI = 3.1415
 * R = 8
 */

const pi = Math.PI;
const raio = 2; //const raio = parseFloat(prompt("Digite o valor do raio")); -> aqui eu peço pro usuario entrar com o valor do raio no navegador.
const comprimento = 2 * pi * raio;

console.log(`O círculo tem raio de tamanho ${raio} e seu comprimento é ${comprimento} `);
