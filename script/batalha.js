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

    Batalha()
}




function Batalha(){

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
    alert('selecionado')
}

