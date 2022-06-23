
let email = document.querySelector('#exampleFormControlInput1email')
let emailOk = false
let telefone = document.querySelector('#exampleFormControlInput1telefone')
let telefoneOk = false

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
    if (telefone.value.length < 9) {
        txtTelefone.innerHTML = 'Telefone Inválido'
        txtTelefone.style.color = 'red'
    } else {
        txtTelefone.innerHTML = 'Telefone válido'
        txtTelefone.style.color = 'green'
        telefoneOk = true
    }
}

function enviar() {
    if (emailOk == true && telefoneOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente antes de enviar.')
    }
}


