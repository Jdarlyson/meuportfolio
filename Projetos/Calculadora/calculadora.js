function adicionarNumero(numero) {
    document.getElementById("resultado").value += numero;
}

function adicionarOperador(operador) {
    document.getElementById("resultado").value += operador;
}

function calcular() {
    let resultado = eval(document.getElementById("resultado").value);
    document.getElementById("resultado").value = resultado
}

function limpar() {
    document.getElementById("resultado").value = "";
}

function calcular() {
    let entrada = document.getElementById("resultado").value;
    // Verifica se o campo de entrada está vazio
    if (entrada.trim() === "") {
        // Se estiver vazio, exibe a mensagem de alerta
        alert("Digite um número válido!");
    } else {
        // Caso contrário, realiza o cálculo normalmente
        let resultado = eval(entrada);
        document.getElementById("resultado").value = resultado;
    }
}
