function gerarConfiguracao() {
    // Obtém os valores dos inputs
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const preco = document.getElementById('preco').value;
    const area = document.getElementById('area').value;
    const areaTotal = document.getElementById('areaTotal').value;
    const rua = document.getElementById('rua').value;
    const video = document.getElementById('video').value;
    const ref = document.getElementById('ref').value;
    const opt1 = document.getElementById('op1').checked ? 1 : 0;
    const opt2 = document.getElementById('op2').checked ? 1 : 0;
    const opt3 = document.getElementById('op3').checked ? 1 : 0;
    const opt4 = document.getElementById('op4').checked ? 1 : 0;
    const opt5 = document.getElementById('op5').checked ? 1 : 0;
    const opt6 = document.getElementById('op6').checked ? 1 : 0;
    const opt7 = document.getElementById('op7').checked ? 1 : 0;
    const opt8 = document.getElementById('op8').checked ? 1 : 0;


    // Cria um objeto JSON com os valores
    const configuracao = {
        email: email,
        senha: senha,
        preco: preco,
        area: area,
        areaTotal: areaTotal,
        rua: rua,
        video: video,
        ref: ref,
        esquina: opt1,
        meioQuadra: opt2,
        agua: opt3,
        esgoto: opt4,
        opt5: opt5,
        opt6: opt6,
        opt7: opt7,
        opt8: opt8
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

function hideAndShow(event, spanId) {
    var elemento = document.getElementById(spanId);

    if (elemento.classList.contains("hide")) {
        // Se a classe "hide" já estiver presente, remover para exibir o elemento
        elemento.classList.remove("hide");
    } else {
        // Se a classe "hide" não estiver presente, adicionar para esconder o elemento
        elemento.classList.add("hide");
    }
}

const moveBt = document.getElementById("moveBt");

moveBt.addEventListener('click', () => {
    const adOpt = document.querySelector(".ad-options");
    adOpt.classList.toggle('expand');

    const iconBt = document.getElementById('iconBt');
    iconBt.classList.toggle('rotate180');

    const optionElements = document.querySelectorAll(".option");
    optionElements.forEach(option => {
        option.classList.toggle('hide');
    });
});

function abrirConfiguracao() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
}

function carregarConfiguracao() {
    const fileInput = document.getElementById('fileInput');
    
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        try {
            const jsonString = event.target.result;
            const configuracao = JSON.parse(jsonString);

            // Preencha os campos do formulário com os dados do objeto JSON
            document.getElementById('email').value = configuracao.email;
            document.getElementById('senha').value = configuracao.senha;
            document.getElementById('preco').value = configuracao.preco;
            document.getElementById('area').value = configuracao.area;
            document.getElementById('areaTotal').value = configuracao.areaTotal;
            document.getElementById('rua').value = configuracao.rua;
            document.getElementById('video').value = configuracao.video;
            document.getElementById('ref').value = configuracao.ref;
            document.getElementById('op1').checked = configuracao.esquina === 1;
            document.getElementById('op2').checked = configuracao.meioQuadra === 1;
            document.getElementById('op3').checked = configuracao.agua === 1;
            document.getElementById('op4').checked = configuracao.esgoto === 1;
            document.getElementById('op5').checked = configuracao.opt5 === 1;
            document.getElementById('op6').checked = configuracao.opt6 === 1;
            document.getElementById('op7').checked = configuracao.opt7 === 1;
            document.getElementById('op8').checked = configuracao.opt8 === 1;
        } catch (error) {
            console.error('Erro ao carregar o arquivo JSON:', error);
        }
    };

    reader.readAsText(file);
}
