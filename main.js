function obtemInfo(form){
    var usuario = {
        email: form.email.value,
        senha: form.senha.value
    }
    return usuario
}

function checkErros(form){
    var erros = []
    const regexNum = /[0-9]/
    const regexLetras = /[A-Za-z]/
    if(form.senha.value.length < 6){
        erros.push("A senha deve conter no mínimo de 6 caracteres")
    }
    if(!regexNum.test(form.senha.value) || !regexLetras.test(form.senha.value)) {
        erros.push("A senha deve conter letras e números")
    }
    if(!form.email.value.includes('@') || !form.email.value.includes('.com') || form.email.value.length < 6) {
        erros.push('Por favor, insira um email válido');
    }
    return erros
}

function mensagemErro(erros){
    textErro.textContent = erros
}

function checkEmail(listaEmail, email){
    if(listaEmail.includes(email)){
        alert('Email já cadastrado')
        return true
    }
    return false
}

function salvaEmail(usuario, listaEmail){
        listaEmail.push(usuario.email)
        return listaEmail
}

var botaoCadastro = document.querySelector('#btnCadastro')
var textErro = document.querySelector('#erros')
var listaEmail = []


botaoCadastro.addEventListener("click", function(event) {
    event.preventDefault(); 
    var form = document.querySelector("#formCadastro");
    var usuario = obtemInfo(form);
    const erros = checkErros(form)
    const erroEmail = checkEmail(listaEmail, usuario.email)
    if(erros.length > 0 || erroEmail){
        mensagemErro(erros)
    }
    else{
        listaEmail = salvaEmail(usuario, listaEmail)
        alert('Cadastro finalizado!')
    }
});