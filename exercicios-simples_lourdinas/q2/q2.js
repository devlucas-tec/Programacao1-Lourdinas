const idade = parseInt(prompt("Digite sua idade"));

const meiaEntrada = (idade <= 12 || idade >= 65);

console.log(`Paga apenas meia entrada? ${meiaEntrada}`);