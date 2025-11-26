const nota1 = Number(prompt("Informe a primeira nota"));
const nota2 = Number(prompt("Informe a segunda nota"));
const nota3 = Number(prompt("Informe a terceira nota"));

const media = (nota1 + nota2 + nota3) / 3;

const taNaMedia = media >= 7;

console.log(`O aluno está na média? ${taNaMedia}`);