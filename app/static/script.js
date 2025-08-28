let arquivosSelecionados = [];   // Arquivos confirmados
let arquivoPendente = null;      // Arquivo aguardando "Inserir"

const fileInput = document.getElementById('fileInput');
const pesquisaInput = document.getElementById('pesquisa');
const lista = document.getElementById('listaArquivos');

// Escolher arquivo
fileInput.addEventListener('change', (event) => {
    const novosArquivos = Array.from(event.target.files);

    if (novosArquivos.length > 0) {
        arquivoPendente = novosArquivos[novosArquivos.length - 1];
        pesquisaInput.value = arquivoPendente.name;
    }

    fileInput.value = ""; // permite escolher o mesmo arquivo novamente
});

// Inserir arquivo
function inserirArquivos() {
    if (!arquivoPendente) {
        alert("Nenhum arquivo selecionado!");
        return;
    }

    if (arquivosSelecionados.some(arq => arq.name === arquivoPendente.name)) {
        alert("Esse arquivo já foi inserido!");
    } else {
        // Salva o arquivo no array e pega o índice
        arquivosSelecionados.push(arquivoPendente);
        const index = arquivosSelecionados.length - 1;

        // Cria linha na tabela
        const tr = document.createElement('tr');

        // Nome do arquivo
        const tdNome = document.createElement('td');
        tdNome.textContent = arquivoPendente.name;
        tr.appendChild(tdNome);

        // Botão excluir
        const tdAcoes = document.createElement('td');
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = "Excluir";
        btnExcluir.classList.add("btn_2", "btn-danger", "btn-sm");

        // Captura o índice na hora da criação
        btnExcluir.onclick = () => {
            excluirArquivo(index, tr);
        };

        tdAcoes.appendChild(btnExcluir);
        tr.appendChild(tdAcoes);

        lista.appendChild(tr);
    }

    pesquisaInput.value = "";
    arquivoPendente = null;
}

// Função para excluir pelo índice
function excluirArquivo(index, linha) {
    arquivosSelecionados.splice(index, 1);
   /* alert("oiiii") */ // remove só esse
    linha.remove();
}
