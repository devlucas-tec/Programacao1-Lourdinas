const real = Number(prompt("Digite um valor em real R$"));
const selectMoeda = prompt("Qual moeda você deseja converter? (euro/dolar/peso)");

const moeda = selectMoeda.toLowerCase();


const euro = real / 6;
const dolar = real / 5;
const peso = real * 350;



if (moeda === "euro") {
    console.log(`R$${real} convertido para euro: €${euro}`);    
} else if (moeda === "dolar") {
    console.log(`R$${real} convertido para dólar é: $${dolar}`);
} else if (moeda === "peso") {
    console.log(`R$${real} convertido para pesos é: $${peso}`);
} else {
    console.log("Moeda inválida! Insira euro, peso ou dolar");
}