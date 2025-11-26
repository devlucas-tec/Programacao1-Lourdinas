const salario = Number(prompt("Digite o salário do funcionário:"));

let imposto;
let impostoDevido;

if (salario <= 2000) {
    imposto = 0;
    console.log("Isento de imposto.");
} else if (salario > 2000 && salario <= 3500) {
    imposto = 10;
    impostoDevido = salario * (imposto / 100)
    console.log(`Imposto devido: R$ ${impostoDevido.toFixed(2)}`);
} else {
    imposto = 20;
    impostoDevido = salario * (imposto / 100)
    console.log(`Imposto devido: R$ ${impostoDevido.toFixed(2)}`);
}
