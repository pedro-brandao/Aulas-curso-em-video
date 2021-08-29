function contagem() {
    var inicio = window.document.getElementById("txti")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")
    var res = window.document.getElementById("res")
if (inicio.value.length == 0||fim.value.length == 0||passo.value.length == 0) {
    window.alert("[ERRO] Insira os dados para contagem")
} else {
    res.innerHTML = "contando"
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
 for (var c = i; c <= f; c += p){
    res.innerHTML += `${c}`
    c++
        }

    }
}