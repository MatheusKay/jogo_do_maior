//var resp = document.getElementById('res');
//res.innerHTML = Math.floor(100* Math.random() + 1);

const form = document.getElementById("form-deposito")
const res = document.getElementById("res")

form.addEventListener('submit', function(e){
    e.preventDefault();

    const tprimerioNumero = document.querySelector("#primeiro-numero")
    const primerioNumero = Number(tprimerioNumero.value)
    const tsegundoNumero = document.querySelector("#segundo-numero")
    const segundoNumero = Number(tsegundoNumero.value)

    //Variaveis do if e else

    const containerCalculando = document.querySelector(".calculando")
    const containerMensagem = document.querySelector(".mensagem")
    const mensage = document.getElementById("mensagem-desc")
    const tituloStatus = document.querySelector('h2')

    const soma = primerioNumero + segundoNumero
    const aleatorio = Math.floor(100* Math.random() + 1)
    console.log(aleatorio)

    const mensagemCalculada = `A soma do seu número foi: <span>${soma}</span> e o número gerado foi: <span>${aleatorio}</span>`

    if (soma > aleatorio){
        containerCalculando.style.display = "none"
        containerMensagem.style.display = "block"
        containerMensagem.classList.remove("mensagem-derrota")
        containerMensagem.classList.add("mensagem-vitoria")
        tituloStatus.innerText = "Seu Numero Ganhou"
        mensage.innerHTML = mensagemCalculada
        
    }else{
        containerCalculando.style.display = "none"
        containerMensagem.style.display = "block"
        containerMensagem.classList.remove("mensagem-vitoria")
        containerMensagem.classList.add("mensagem-derrota")
        tituloStatus.innerText = "Seu numero Perdeu"
        mensage.innerHTML = mensagemCalculada
    }

})



