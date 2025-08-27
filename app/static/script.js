let arquivosSelecionados = [];   // Arquivos que já foram confirmados
let arquivoPendente = null;      // Arquivo aguardando o clique em "Inserir"

const fileInput = document.getElementById('fileInput');
const pesquisaInput = document.getElementById('pesquisa');
const lista = document.getElementById('listaArquivos');

// Ao escolher arquivo
fileInput.addEventListener('change', (event) => {
    const novosArquivos = Array.from(event.target.files);

    if (novosArquivos.length > 0) {
        arquivoPendente = novosArquivos[novosArquivos.length - 1];
        pesquisaInput.value = arquivoPendente.name;
    }

    fileInput.value = ""; // permite escolher o mesmo arquivo de novo
});

// Ao clicar em "Inserir"
function inserirArquivos() {
    if (!arquivoPendente) {
        alert("Nenhum arquivo selecionado!");
        return;
    }

    if (arquivosSelecionados.some(arq => arq.name === arquivoPendente.name)) {
        alert("Esse arquivo já foi inserido!");
        
    } else {
        arquivosSelecionados.push(arquivoPendente);

        // Cria linha na tabela
        const tr = document.createElement('tr');

        // Coluna com nome
        const tdNome = document.createElement('td');
        tdNome.textContent = arquivoPendente.name;
        tr.appendChild(tdNome);

        // Coluna com botão excluir
        const tdAcoes = document.createElement('td');
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = "Excluir";
        btnExcluir.onclick = () => excluirArquivo(arquivoPendente.name, tr);
        tdAcoes.appendChild(btnExcluir);
        tr.appendChild(tdAcoes);

        lista.appendChild(tr);
    }

    pesquisaInput.value = "";
    arquivoPendente = null;
}

// Função para excluir
function excluirArquivo(nomeArquivo, linha) {
    // Remove do array
    arquivosSelecionados = arquivosSelecionados.filter(arq => arq.name !== nomeArquivo);

    // Remove da tabela
    linha.remove();
}
