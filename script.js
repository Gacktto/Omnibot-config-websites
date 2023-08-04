function gerarConfiguracao() {
    // Obtém os valores dos inputs
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const preco = document.getElementById('preco').value;
    const area = document.getElementById('area').value;
    const rua = document.getElementById('rua').value;
    const video = document.getElementById('video').value;
    const ref = document.getElementById('ref').value;


    // Cria um objeto JSON com os valores
    const configuracao = {
        email: email,
        senha: senha,
        preco: preco,
        area: area,
        rua: rua,
        video: video,
        ref: ref
    };

    // Converte o objeto JSON para uma string formatada
    const jsonString = JSON.stringify(configuracao, null, 2);

    // Cria um elemento <a> temporário para fazer o download
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(jsonString));
    downloadLink.setAttribute('download', 'configuracao.json');
    downloadLink.style.display = 'none';

    // Adiciona o elemento <a> à página
    document.body.appendChild(downloadLink);

    // Simula um clique no link para iniciar o download
    downloadLink.click();

    // Remove o elemento <a> temporário da página
    document.body.removeChild(downloadLink);
}
