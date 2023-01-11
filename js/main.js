function obtemInfo(form){
    var usuario = {
        email: form.email.value,
        senha: form.senha.value
    }
    return usuario
}


// parte principal

const botaoCadastro = document.querySelector('#btnCadastro')
var textErro = document.querySelector('#erros')
let listaEmail = []
var emailSalvos = JSON.parse(localStorage.getItem("emails")) || []
listaEmail = listaEmail.concat(emailSalvos)

botaoCadastro.addEventListener("click", function(event) {
    event.preventDefault(); 
    textErro.textContent = ''
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
        localStorage.setItem("emails", JSON.stringify(usuario.email)) // armazenar
    }
    form.email.value = "" // limpar form
    form.senha.value = ""
});