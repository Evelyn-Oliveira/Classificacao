let arquivosSelecionados = [];

document.getElementById('fileInput').addEventListener('change', (event) => {
    arquivosSelecionados = Array.from(event.target.files);
});

function inserirArquivos() {
    let textarea = document.getElementById('listaArquivos');
    if (arquivosSelecionados.length === 0) {
    alert("Nenhum arquivo selecionado!");
    return;
    }
    textarea.value = "Arquivos:\n" + arquivosSelecionados.map(a => a.name).join("\n");
}
 