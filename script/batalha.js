let c1 = 1
let c2 = 2
let inicio = 1
let fim = 3
let nome = [
    '',
    'Serpendragon',
    'Croconot',
    'Colossus',
]
let elemento = [
    '',
    'Natureza',
    'Fogo',
    'Água',
]
let vida = [
    0,
    4000,
    5000,
    7800,
]
let dano = [
    0,
    1200,
    2000,
    1000,
]  
let energia = [
    0,
    20,
    20,
    20,
]
let src = [
    '',
    '../midia/serpendragon.jpg',
    '../midia/croconot.jpg',
    '../midia/colossus.jpg',
]
function TrocarMonstro(monstro, sentido){
    if (monstro == 1){
        if (sentido == 'esquerda'){
            if (c1 == inicio){
                alert('já está no primeiro')
            }
            else{
                c1--
            }
        }
        else{ //direita
            if (c1 == fim){
                alert('Já chegou no último')
            }
            else{
                c1++
            }

        }
    }
    else if (monstro == 2){
        if (sentido == 'esquerda'){
            if (c2 == inicio){
                alert('já está no primeiro')
            }
            else{
                c2--
            } 
        }
        else{ //direita
            if (c2 == fim){
                alert('Já chegou no último')
            }
            else{
                c2++
            }
        }
    }
    else{
        alert('Houve um problema no processamento de dados <br> Entre em contato com um desenvolvedor e relate o problema')
    }

    exibir()
}




function exibir(){

// Monstro seleconado
    let nome1 = document.getElementById('nome1')
    let elemento1 = document.getElementById('elemento1')
    let vida1 = document.getElementById('vida1')
    let dano1 = document.getElementById('dano1')
    let energia1 = document.getElementById('energia1')
    let imagem1 = document.getElementById('imagem1')

    nome1.innerText = `${nome[c1]}`
    elemento1.innerText = `Elemento: ${elemento[c1]}`
    vida1.innerText = `Hp: ${vida[c1]}`
    dano1.innerText = `Dano: ${dano[c1]}`
    energia1.innerText = `Energia: ${energia[c1]}`
    imagem1.setAttribute('src', `${src[c1]}`)

// Monstro inimigo
    let nome2 = document.getElementById('nome2')
    let elemento2 = document.getElementById('elemento2')
    let vida2 = document.getElementById('vida2')
    let dano2 = document.getElementById('dano2')
    let energia2 = document.getElementById('energia2')
    let imagem2 = document.getElementById('imagem2')

    nome2.innerText = `${nome[c2]}`
    elemento2.innerText = `Elemento: ${elemento[c2]}`
    vida2.innerText = `Hp: ${vida[c2]}`
    dano2.innerText = `Dano: ${dano[c2]}`
    energia2.innerText = `Energia: ${energia[c2]}`
    imagem2.setAttribute('src', `${src[c2]}`)
}


function selecionar(){
    sessionStorage.setItem('c1', c1)
    sessionStorage.setItem('c2', c2)
    //alert(`Valor do c1 é ${c1} e c2 é ${c2}`)

}

function processarC(){
    c1 = parseInt(sessionStorage.getItem('c1'))
    c2 = parseInt(sessionStorage.getItem('c2'))
    //alert(`Valor do c1 é ${c1} e c2 é ${c2}`)    
    exibir()
}

function atacar(){
    if(vida[c2] > 0 && vida[c1] > 0 && vida[c2] - dano[c1] > 0 && vida[c1] - dano[c2] > 0){
        acaoInimigo()
    }
    else if(vida[c2] - dano[c1] <= 0){ // Vitória
        alert(`Você VENCEU! Muito bem`)
        src[c2] = `../midia/vazio.png`
        vida[c2] = 0
    }
    else if(vida[c1] - dano[c2] <= 0){ // Derrota
        alert(`Você PERDEU! Tente novamente`)
        src[c1] = `../midia/vazio.png`
        vida[c1] = 0
    }
    else{ // ERRO ou INVÁLIDO
        alert("ERROR")
    }
    exibir() 
}

function defender(){
    let possibilidades = ['Defesa', 'MeiaDefesa', 'ContraGolpe']
    let resultado = possibilidades[Math.floor(Math.random()*possibilidades.length)]
    
    if(resultado == 'Defesa'){
        alert(`${nome[c1]} DEFENDEU o ataque`)
    }
    else if(resultado == 'MeiaDefesa'){
        vida[c1] -= dano[c2] / 2
        alert(`${nome[c1]} DEFENDEU PARTE do ataque, recebendo ${dano[c2]/2} de dano e ficando com ${vida[c1]}`)
    }
    else{
        vida[c2] -= dano[c1] / 3
        alert(`${nome[c1]} INTERCEPTOU o ataque de ${nome[c2]}, causando ${dano[c1] / 3} de DANO a ele`)
        vida[c2] -= dano[c1]
        alert(`Depois disso atacou novamente, CAUSANDO ${dano[c1]} e deixando ${nome[c2]} com ${vida[c2]}`)
    }
    exibir()
}

function recarregar(){
    alert(`Esta função está em desenvolvimento.`)
    exibir()
}

function acaoInimigo(){
    let possibilidades = ['Atacar', 'Defender']
    let resultado = possibilidades[Math.floor(Math.random()*possibilidades.length)]
    if(resultado == 'Atacar'){
        vida[c2] -= dano[c1]
        alert(`${nome[c1]} ATACOU ${nome[c2]} deixando ele com ${vida[c2]} de vida!`)
        vida[c1] -= dano[c2]
        alert(`${nome[c2]} CONTRA-ATACOU deixando ele com ${vida[c1]} de vida!`)    
    }
    else{ //defender
        let possibilidades = ['Defesa', 'MeiaDefesa', 'ContraGolpe']
        let resultado = possibilidades[Math.floor(Math.random()*possibilidades.length)]

        if(resultado == 'Defesa'){
            alert(`${nome[c2]} DEFENDEU o ataque`)
        }
        else if(resultado == 'MeiaDefesa'){
            vida[c2] -= dano[c1] / 2
            alert(`${nome[c2]} DEFENDEU PARTE do ataque, recebendo ${dano[c1]/2} de dano e ficando com ${vida[c2]}`)
        }
        else{
            vida[c1] -= dano[c2] / 3
            alert(`${nome[c2]} INTERCEPTOU o ataque de ${nome[c1]}, causando ${dano[c2] / 3} de DANO a ele`)
            vida[c1] -= dano[c2]
            alert(`Depois disso atacou novamente, CAUSANDO ${dano[c2]} e deixando ${nome[c1]} com ${vida[c1]}`)
        }
        exibir()
    }
}



/*
function Batalhar(){
    let meumonstro = {nome: nome[c1] , elemento: elemento[c1] , vida: vida[c1], dano: dano[c1], energia: energia[c1], imagem: src[c1]}

    let inimigo = {nome: nome[c2] , elemento: elemento[c2] , vida: vida[c2], dano: dano[c2], energia: energia[c2], imagem: src[c2]}

    function atacar(){
        inimigo.vida -= meumonstro.dano
        exibir()
    }
}
*/


