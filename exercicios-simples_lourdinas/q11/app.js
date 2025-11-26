const num = Number(prompt("Digite um número para obter a sua tabuada:"));

for (let i = 1; i <= 10; i++) {
    const resultado = num * i;
    console.log(`${num} x ${i} = ${resultado}`);
}