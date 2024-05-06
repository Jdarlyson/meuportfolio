function adicionarNumero(numero) {
    document.getElementById("resultado").value += numero;
}

function adicionarOperador(operador) {
    document.getElementById("resultado").value += operador;
}

function calcular() {
    let entrada = document.getElementById("resultado").value;
    if (entrada.trim() === "") {
        alert("Digite um número válido!");
    } else {
        let resultado = eval(entrada);
        document.getElementById("resultado").value = resultado;
    }
}

function limpar() {
    document.getElementById("resultado").value = "";
}

function alternarModo() {
    document.body.classList.toggle("dark-mode");
    var calculadora = document.querySelector(".calculadora");
    if (calculadora) {
        calculadora.classList.toggle("dark-mode-calc"); // Adicionando uma classe específica para a calculadora no modo escuro
        
    }
}