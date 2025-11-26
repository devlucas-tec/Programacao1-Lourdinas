const valorCompra = Number(prompt("Informe o valor  da compra"));

const desconto = Number(prompt("Informe a porcentagem de desconto"));


const valorFinal = valorCompra - (valorCompra * desconto/100);

console.log(`O valor de sua compra é R$${valorCompra}\nValor final com desconto de ${desconto}% = R$${valorFinal}`);