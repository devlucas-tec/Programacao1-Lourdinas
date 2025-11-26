const num1 = Number(prompt("Digite o número inicial"));
const num2 = Number(prompt("Digite o número intermediário"));
const num3 = Number(prompt("Digite o número final"));

const intervalo = (num2 > num1 && num2 < num3);

console.log(`O intermediário (${num2}) está entre ${num1} e ${num3}? ${intervalo}`);