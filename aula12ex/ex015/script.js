function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Masculino'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'criançam.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'adolescentem.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultom.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosom.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Feminino'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'criançaf.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'adolescentef.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultof.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosaf.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o gênero ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}