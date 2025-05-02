
function Monstro(nome='' , elemento='', vida=1, dano=0, velocidade=1, src='../midia/IMG-20250424-WA0137-400px.jpg'){
    
    let vetor = {1:nome, 2:elemento, 3:vida, 4:dano, 5:velocidade}

    let textos = ['naoaparece','Nome: ', 'Elemento: ', 'Vida: ', 'Dano: ', 'Velocidade: ']

    let main = document.getElementById('main')
    let section = document.createElement('section')
    main.appendChild(section)
    
    section.appendChild(document.createElement('hr'))

    let img = document.createElement('img')
    img.setAttribute('src', `${src}`)
    img.setAttribute('alt','imagem')
    section.appendChild(img)


    let div = document.createElement('div')
    section.appendChild(div)

    for(c = 1; c <= 5; c++){
        let p = document.createElement('p')
        p.innerText = `${textos[c]} ${vetor[c]} `
        div.appendChild(p)
    }
    section.appendChild(document.createElement('hr'))
}




