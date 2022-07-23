let tamanhoArquivo = window.parseInt(prompt("Qual o tamanho do arquivo?: "));
let velocidadeInternet = window.parseInt(prompt("Qual a velocidade da sua internet: "));

//FUNÇÃO PARA CALCULAR O TEMPO DE DOWNLOAD.
function tempoDownload(tamanho,velocidade){

tempoDownload = tamanho/(velocidade/8);
window.alert("O tempo de download do arquivo é de aproximandamente: "+tempoDownload);
document.write("O tempo de downlaod do arquivo é de aproximadamente: "+tempoDownload);

};

tempoDownload(tamanhoArquivo,velocidadeInternet);