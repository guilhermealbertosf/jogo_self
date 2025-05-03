



function selecionar(){
    alert('selecionado')
}


function Batalha(){

// Monstro seleconado
    let nome1 = document.getElementById('nome1')
    let elemento1 = document.getElementById('elemento1')
    let vida1 = document.getElementById('vida1')
    let dano1 = document.getElementById('dano1')
    let energia1 = document.getElementById('energia1')
    let imagem1 = document.getElementById('imagem1')

    nome1.innerText = `${monstro1.nome}`
    elemento1.innerText = `Elemento: ${monstro1.elemento}`
    vida1.innerText = `Hp: ${monstro1.vida}`
    dano1.innerText = `Dano: ${monstro1.dano}`
    energia1.innerText = `Energia: ${monstro1.energia}`
    imagem1.setAttribute('src', `${monstro1.src}`)

// Monstro inimigo
    let nome2 = document.getElementById('nome2')
    let elemento2 = document.getElementById('elemento2')
    let vida2 = document.getElementById('vida2')
    let dano2 = document.getElementById('dano2')
    let energia2 = document.getElementById('energia2')
    let imagem2 = document.getElementById('imagem2')

    nome2.innerText = `${monstro2.nome}`
    elemento2.innerText = `Elemento: ${monstro2.elemento}`
    vida2.innerText = `Hp: ${monstro2.vida}`
    dano2.innerText = `Dano: ${monstro2.dano}`
    energia2.innerText = `Energia: ${monstro2.energia}`
    imagem2.setAttribute('src', `${monstro2.src}`)
}

let monstro1 = {
    nome:'Serpendragon',elemento:'Natureza',vida:4000,dano:1200,energia:20,src:'../midia/serpendragon.jpg'}

let monstro2 = {
    nome:'Colossus', elemento:'água', vida:7800,dano:1000, energia:20, src:'../midia/colossus.jpg'}

let c1 = 1
let c2 = 1
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
            
        }
        else{ //direita
            
        }
    }
    else{
        alert('Houve um problema no processamento de dados <br> Entre em contato com um desenvolvedor e relate o problema')
    }

    Batalha()
}

// TROCAR INDICADOR DO MONSTRO1 E 2 PELO INDICADOR C