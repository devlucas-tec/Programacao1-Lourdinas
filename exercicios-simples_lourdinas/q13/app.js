const N = Number(prompt("Digite um número N:"));

let soma = 0;

for (let i = 1; i <= N; i++) {
    soma += i;
}

console.log("A soma de todos os números de 1 até " + N + " é: " + soma);