function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    //var hora = 5
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotosite_2.png'  
        document.body.style.background = "#1979a9"
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fotosite_3.png'
        document.body.style.background = "69bdd2"
    } else {
        img.src = "fotosite_4.png"
        document.body.style.background = "#797980"
    }
}