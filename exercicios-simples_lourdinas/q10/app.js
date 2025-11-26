const num = Number(prompt("Digite um número para somar os números pares até ele:"));

let soma = 0;

for (let i = 2; i <= num; i += 2) {
    soma += i;
}

console.log(`A soma dos números pares de 2 até ${num} é: ${soma}`);