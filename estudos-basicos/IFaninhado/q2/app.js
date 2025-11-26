const usuario = prompt("Digite o usuário");
const senha = prompt("Digite a senha");

const user = "lucas";
const password = "lucas123";

if (usuario === user && senha === password) {
    console.log("Sucesso!")

    const acesso = prompt("Informe o nível de acesso (adm ou comum)").toLowerCase();

    if (acesso === "adm") {
        console.log("Acesso de administrador")
    } else if ( acesso === "comum") {
        console.log("Acesso de usuário comum")
    } else {
        console.log("Acesso inválido")
    }

} else {
    console.log("Usuário ou senha inválidos");
}