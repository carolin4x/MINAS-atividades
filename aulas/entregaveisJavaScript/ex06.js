/*
Crie uma função que receba como parâmetro o nome da pessoa e a idade, 

caso a pessoa seja maior de 18 anos a função deve retornar "nomeDaPessoa é de maior e tem x anos", 
caso seja de menor "nomeDaPessoa é de maior e tem x anos".


Em seguida chame essa função quatro vezes, passando 3 diferentes dados.
*/


let nome = prompt('Informe seu nome: ')
let idade = parseFloat(prompt('Informe sua idade: '))

function nomeIdade (nome, idade){

    if(idade > 18){
        return(`${nome} tem ${idade} anos e é maior de idade!`)
    }else{
        return(`${nome} tem ${idade} anos e é menor de idade!`)
    }
}


console.log(nomeIdade(nome,idade));