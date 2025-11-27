const PRODUTOS = {
    '1': { nome: "Produto 1", preco: 5.00 },
    '2': { nome: "Produto 2", preco: 3.00 },
    '3': { nome: "Produto 3", preco: 10.00 }
};

let totalCompra = 0;
let continuarComprando = true;

function obterQuantidadeValida(mensagem) {
    let quantidade;
    while (true) {
        const input = prompt(mensagem);
        quantidade = parseInt(input);
        if (Number.isInteger(quantidade) && quantidade >= 0) {
            return quantidade;
        }
        alert("Quantidade inválida. Por favor, digite um número inteiro não negativo.");
    }
}

while (continuarComprando) {
    let mensagemPrompt = "Selecione o produto a adicionar ou digite 'FIM' para finalizar:\n";
    mensagemPrompt += "1 - Produto 1 (R$ 5,00)\n";
    mensagemPrompt += "2 - Produto 2 (R$ 3,00)\n";
    mensagemPrompt += "3 - Produto 3 (R$ 10,00)";
    
    const escolha = prompt(mensagemPrompt);

    if (escolha === null || escolha.toUpperCase() === 'FIM') {
        continuarComprando = false;
        break; 
    }

    if (PRODUTOS[escolha]) {
        const produtoSelecionado = PRODUTOS[escolha];
        
        const quantidade = obterQuantidadeValida(`Qual a quantidade de ${produtoSelecionado.nome} que deseja adicionar?`);
        
        if (quantidade > 0) {
            const subtotal = quantidade * produtoSelecionado.preco;
            totalCompra += subtotal;
            console.log(`Adicionado: ${quantidade}x ${produtoSelecionado.nome} | Subtotal: R$ ${subtotal.toFixed(2)}`);
        } else {
            console.log("Nenhum item adicionado.");
        }
    } else {
        alert("Escolha inválida. Por favor, digite 1, 2, 3 ou FIM.");
    }
}

console.log("\n==================================");
console.log(`Total da Compra: R$ ${totalCompra.toFixed(2)}`);
console.log("==================================");