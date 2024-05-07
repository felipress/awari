let botao = document.getElementsByTagName("button")[0]

botao.addEventListener("click", function(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value

    let envio = nome + " | " + email + " | " + mensagem
    
    alert(envio)
})
