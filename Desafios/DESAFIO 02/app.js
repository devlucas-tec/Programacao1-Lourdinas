/* Faça um sistema que recebe 4 notas,
um por bimestre e calcula a média dessas 4 notas.

Depois, o html deve exibir no browser do console
a média 
*/

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a tereira nota:"));
let nota4 = Number(prompt("Digite a quarta nota:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log("A média de suas notas é: " + media);