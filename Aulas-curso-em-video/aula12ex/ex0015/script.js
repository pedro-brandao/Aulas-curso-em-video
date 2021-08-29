function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //variavel para verificar o ano atual
    var fano = document.getElementById("txtano") //verifica a caixa de texto do formulario
    var res = document.getElementById("res") //cria uma variavel para a div = resposta
        if (fano.value.length == 0 || fano.value > ano){ //conta quantas casas do valor da caixa de texto foi digitada e se for maior que o ano atual ou = a 0 da um erro
        window.alert("[ERRO] Verifique os dados e tente novamente!") //alerta de erro para a função a cima
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
    if (fsex[0].checked){
        genero = "Homem"
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src','bebehomem.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','jovemhomem.png')
            } else if (idade < 50){ 
                //adulto
                img.setAttribute('src','adultohomem.png')
            } else {
                //idoso
                img.setAttribute('src','idosohomem.png')
            }
    } else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src','bebemulher.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','jovemmulher.png')
            } else if (idade < 50){ 
                //adulto
                img.setAttribute('src','adultomulher.png')
            } else {
                //idoso
                img.setAttribute('src','idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Verificamos ${genero} com ${idade} anos de idade.`
        res.appendChild(img)
    }
}
