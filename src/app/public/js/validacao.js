let toastmsg = document.getElementById('liveToast');

function validar() {

    let valido = true

    let mensagem = document.getElementById("mensagem")
    mensagem.innerHTML = "erro nos campos:"

    if (document.getElementById("nome").value.trim() == "") {

        mensagem.innerHTML += " nome"
        valido = false

    }
    if (document.getElementById("email").value.trim() == "") {

        mensagem.innerHTML += " email"
        valido = false

    }
    if (document.getElementById("conteudo").value.trim() == "") {

        mensagem.innerHTML += " conteudo"
        valido = false

    }

    if (!valido) {

        let toast = new bootstrap.Toast(toastmsg);
        toast.show()

    }

    return valido;

}