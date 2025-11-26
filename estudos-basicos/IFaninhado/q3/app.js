const a = Number(prompt("Informe o lado a"));
const b = Number(prompt("Informe o lado b"));
const c = Number(prompt("Informe o lado c"));

if (a + b > c) {
    if ( a === b && b === c) {
        console.log("Triângulo equilátero")
    } else if(a === b || a === c || b === c) {
        console.log("Triângulo Isóceles")
    } else {
        console.log("Triângulo escaleno")
    }
} else {
    console.log("Não é um triângulo")
}