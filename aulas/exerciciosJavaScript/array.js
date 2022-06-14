const marcaCarros = ["Ford", "Hyunday", "Fiat", "BMW", "Etios"];
console.log(marcaCarros.length);
console.log(marcaCarros);

/*o PUSH vai adicionar um elemento apos a ultima posição */
marcaCarros.push("Honda");
console.log(marcaCarros);

/* aqui ele substitui na posição informada, que no caso foi o ZERO */
marcaCarros[0] = "Corola"; 

//console.log(marcaCarros);
//console.log(marcaCarros[3] + "\n" + marcaCarros[4]);
console.log(marcaCarros.length);

/*aqui eu pego o tamanho do array e subtraio -' posição e coloco esta nova em questão "LisCar" */
marcaCarros[marcaCarros.length - 1] = "LisCar";

/*aqui eu adiciono um novo elemento independente de saber o tamanho do array */
marcaCarros[marcaCarros.length] = "DanMotos";
console.log(marcaCarros);

/*o POP vai eliminar o ultimo item do array */
marcaCarros.pop();
console.log(marcaCarros);

/*o SORT coloca os elementos do array em ordem crescente/alfabetica */
console.log(marcaCarros.sort());

/* o SPLICE vai alterar conteudo de uma lista*/
//a ideia é ficar assim após o splice -> ["Lasanha", "Nhoque", "Pizza", "Macarronada"];
const massas = ["Lasanha", "Pizza", "Macarronada"]; 
console.log(massas);
massas.splice(1, 0, "Nhoque");
console.log(massas);


