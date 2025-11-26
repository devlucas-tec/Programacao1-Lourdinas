const nota = prompt("Digite uma nota (A, B, C, D ou F)").toUpperCase();

switch (nota) {

    case "A" :
        console.log("Excelente")
    break;

    case "B" :
        console.log("Bom")
    break;

    case "C" :
        console.log("Regular")
    break;

    case "D" :
        console.log("Ruim")
    break;

    case "F" :
        console.log("Reprovado")
    break;

    default :
    console.log("Nota inválida, apenas A, B, C, D ou F")
    break;
}