/*
case sensitive = reconhece letras maiusculas e minusculas

por tag: getElementByTagName()
por Id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: queryseletor()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')


function validaNome() {
    let txt =  document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txt.innerHTML = 'Nome invalido'
        txt.style.color = 'red'
    }else {
        txt.innerHTML = 'Nome valido'
        txt.style.color = 'green'
    }

}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexof('@') == -1){
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'E-mail valido'
        txtEmail.style.color = 'green'
    }
}

