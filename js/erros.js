function checkErros(form){
    var erros = []
    const regexNum = /[0-9]/
    const regexLetras = /[A-Za-z]/
    if((!regexNum.test(form.senha.value) || !regexLetras.test(form.senha.value)) && form.senha.value.length < 6 ) {
        erros.push("A senha deve conter letras, números e o mínimo de 6 caracteres.")
    }
    else if(form.senha.value.length < 6){
        erros.push("A senha deve conter no mínimo de 6 caracteres.")
    }
    else if(!regexNum.test(form.senha.value) || !regexLetras.test(form.senha.value)) {
        erros.push("A senha deve conter letras e números.")
    }
    if(!form.email.value.includes('@') || form.email.value.length < 3) {
        erros.push('Por favor, insira um email válido.');
    }
    return erros
}

function mensagemErro(erros){
    textErro.textContent = erros
}