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