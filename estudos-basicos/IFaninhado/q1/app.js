const n1 = Number(prompt("Informe a primeira nota"));
const n2 = Number(prompt("Informe a segunda nota"));

const media = (n1 + n2) / 2;

if (media >= 7) {
    console.log("Aprovado");
} else if (media < 7){
    console.log("Em Recuperação")

    const recuperacao = Number(prompt("Qual a nota de recuperação?"))

    if (recuperacao >= 5 ) {
        console.log("Aprovado na recuperação")
    } else {
        console.log("Reprovado")
    }
}