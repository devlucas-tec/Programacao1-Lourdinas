const N = Number(prompt("Digite um número N:"));

let count = 0;

for (let i = 1; i <= N; i++) {

    if (i % 2 === 0 && i % 5 === 0) {
        count++;
    }
}

console.log("Quantidade de números entre 1 e " + N + " que são pares e múltiplos de 5: " + count);