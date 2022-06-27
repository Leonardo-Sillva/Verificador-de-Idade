function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/homem-criança.jpg')
            }
            else if (idade >= 10 && idade < 21) {
                //jovem
                img.setAttribute('src', 'img/homem-jovem.jpg')
            }
            else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src', 'img/homem-adulto.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'img/homem-velho.jpg')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/mulher-criança.jpg')
            }
            else if (idade >= 10 && idade < 21) {
                //adolescente
                img.setAttribute('src', 'img/mulher-jovem.jpg')
            }
            else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src', 'img/mulher-adulta.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'img/mulher-velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =  `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
