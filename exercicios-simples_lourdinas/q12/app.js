const num = Number(prompt("Digite um número para obter a soma dos quadrados até esse número:"));

let soma = 0;

for (let i = 1; i <= num; i++) {
    soma += i * i;
}

console.log(`A soma dos quadrados dos números de 1 até ${num} é: ${soma}`);