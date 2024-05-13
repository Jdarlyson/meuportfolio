//para baixar o curriculo
document.getElementById("downloadButton").addEventListener("click", function() {    
    var link = document.createElement('a');
    // Defina o atributo href com o link para o arquivo PDF
    link.href = 'assets/Curriculo.pdf'; // Substitua pelo caminho real do seu arquivo PDF
    // Defina o atributo download como o nome do arquivo que deseja que seja baixado
    link.download = 'Curriculo.pdf'; // Substitua pelo nome que deseja para o arquivo
    // Simule um clique no link para iniciar o download
    link.click();
});

//botao de voltar
function voltar() {
    window.history.back();
}