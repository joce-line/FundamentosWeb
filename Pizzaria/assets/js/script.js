

/* 
Case sensitive

por tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementByClassName()
por Seletor: querySelector()  -- vamos usar mais este, pois podemos pegar só pelo Id, quanto Nmae ou Tag
*/

let nome = window.document.getElementById('nome') /*pelo Id n se coloca #*/
let email = document.querySelector('#email') /* Pelo slector n funciona se tirar o # */
let telefone = document.querySelector('#telefone')
let nomeOk = false
let emailOk = false
let telefoneOk = false
let mapa = document.querySelector('#mapa')


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaTelefone() {
    let txtTelefone = document.querySelector('#txtTelefone')
    if (telefone.value.length < 8) {
        txtTelefone.innerHTML = 'Telefone Inválido'
        txtTelefone.style.color = 'red'
    } else {
        txtTelefone.innerHTML = 'Telefone válido'
        txtTelefone.style.color = 'green'
        telefoneOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && telefoneOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar.')
    }
}

function mapaZoom() {
    mapa.style.width = '600px'
    mapa.style.height = '400px'
}

function mapaNormal() {
    mapa.style.width = '300px'
    mapa.style.height = '200px'
}



