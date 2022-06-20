/*
 Declare o seguinte Array:

const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];

Utilizando o for (não for..in nem for..of), faça as seguintes operações:
1. Liste todos os elementos do Array;
2. Liste apenas as notas que forem menor que 1;
3. Se houver no Array alguma nota igual a 10, adicione ao final do Array uma nova nota de 9.0;
4. Se houver no Array uma nota igual a 6.3, remova o último elemento do Array.

Boa sorte! :D


const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];

notas.push(6.3);
console.log(notas);

console.log(notas.length);

for (let notas = 0; notas <= 1; notas++) {
    console.log(`notas = ${notas}`);
}

if (notas === 10) {
    notas.splice(0, 1, "9.0");
    console.log(notas);
} else if (notas === 6.3) {
    console.log(notas.length-1);
}

*/

const notas = [5.1, 0.1, 6.2, 0.6, 7.4, 10];
console.log("Liste todos os elementos do Array");
for(let i=0; i < 6; i++) {
    console.log(notas[i]);
}
console.log("Liste apenas as notas que forem menor que 1");
for(let i=0; i<6; i++){
    if(notas[i] < 1){
        console.log(notas[i]);
    }
}
console.log(" Se houver no Array alguma nota igual a 10, adicione ao final do Array uma nova nota de 9.0");
for (let i = 0; i < 6; i++) {
    if (notas[i]===10) {
        notas.push(9.0);
        console.log(notas);
    }
}
console.log("Se houver no Array uma nota igual a 6.3, remova o último elemento do Array.");
var temNota = false;
for (let i = 0; i < 6; i++) {
    if (notas[i] === 6.3) {
        notas = notas.pop();
        console.log(notas);
        temNota = true;
    }
}
if(temNota == false ){
    console.log("Não possui nota 6.3");
}