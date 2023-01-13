function checkErros(form){
    var erros = []
    const regexNum = /[0-9]/
    const regexLetras = /[A-Za-z]/
    const regexEmail = /\S+@\S+\.\S+/
    if(!regexEmail.test(form.email.value)) {
        erros.push('Por favor, insira um email válido');
    }
    if((!regexNum.test(form.senha.value) || !regexLetras.test(form.senha.value)) && form.senha.value.length < 6 ) {
        erros.push("A senha deve conter letras, números e o mínimo de 6 caracteres.")
    }
    else if(form.senha.value.length < 6){
        erros.push("A senha deve conter no mínimo 6 caracteres.")
    }
    else if(!regexNum.test(form.senha.value) || !regexLetras.test(form.senha.value)) {
        erros.push("A senha deve conter letras e números.")
    }
    return erros
}

function mensagemErro(erros){
    textErro.textContent = erros
}