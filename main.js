const form = document.getElementById("tForm");
const contatos = [];
const telefone = [];

let linhas = '';

form.addEventListener("submit", function(e){ 
    e.preventDefault ();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById('tName');
    const inputTel = document.getElementById('tTel');

    if (contatos.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} já foi inserida`)
    } else {
        contatos.push(inputNome.value);
        telefone.push(inputTel.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputTel.value}</td>`
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputTel.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

const inputTel = document.getElementById('tTel');

inputTel.addEventListener('input', function(e) {
    let tel = this.value.replace(/\D/g, '');

    if (tel.length > 0) {
        tel = '(' + tel;
    }
    if (tel.length > 3) {
        tel = tel.slice(0, 3) + ') ' + tel.slice(3);
    }
    if (tel.length > 10) {
        tel = tel.slice(0, 10) + '-' + tel.slice(10, 14);
    }

    if (tel.length > 15) {
        tel = tel.slice(0, 15);
    }

    this.value = tel;
});