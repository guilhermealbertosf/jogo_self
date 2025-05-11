
// VARIÁVEIS GERAIS

let c1 = 1
let c2 = 2
let inicio = 1
let fim = 4
let energiaAtaque = 20
let energiaDefesa = 10
let energiaRecarga = 60
let energiaMax = 100
let imagemDerrotado = `../midia/DERROTADO.jpg`

function energiaMsgRecarregar(){
    alert(`Você está sem energia! recarregue-a`)
}

let lista_de_elementos = {natureza:`\u{1F33F}`, fogo:`\u{1F525}`, agua:`\u{1F4A7}`, terra:`\uD83C\uDFD4\uFE0F` ,som:`\u{1F50A}`, lutador:`\u2694\uFE0F`, polvora:`\u{1F4A3}`, magia:`\u2B50`}

// COMPONENTES DOS MONSTROS


let nome = [
    '',
    'Serpendragon',
    'Croconot',
    'Colossus',
    'tclasserous'
]
let elemento = [
    '',
    `${lista_de_elementos.natureza}`,
    `${lista_de_elementos.fogo}`,
    `${lista_de_elementos.agua}`,
    `${lista_de_elementos.terra}`,
]
let vida = [
    0,
    4000,
    5000,
    7800,
    6000,
]
let dano = [
    0,
    1200,
    2000,
    1000,
    1300,
]  
let energia = [
    0,
    20,
    20,
    20,
    20,
]
let src = [
    '',
    '../midia/serpendragon.jpg',
    '../midia/croconot.jpg',
    '../midia/colossus.jpg',
    `../midia/tclasserous.jpg`
]




// FUNÇÃO RESPONSÁVEL POR EXIBIR AS INFORMAÇÕES NA TELA 

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
    energia1.innerText = `Energia: ${energia[c1]}%`
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
    energia2.innerText = `Energia: ${energia[c2]}%`
    imagem2.setAttribute('src', `${src[c2]}`)
}
    




// FUNÇÃO RESPONSÁVEL PELOS BOTÕES NA ABA DE SELEÇÃO

function TrocarMonstro(monstro, sentido){
    if (monstro == 1){
        if (sentido == 'esquerda'){
            if (c1 == inicio){
                //alert('já está no primeiro')
            }
            else{
                c1--
            }
        }
        else{ //direita
            if (c1 == fim){
                //alert('Já chegou no último')
            }
            else{
                c1++
            }

        }
    }
    else if (monstro == 2){
        if (sentido == 'esquerda'){
            if (c2 == inicio){
                //alert('já está no primeiro')
            }
            else{
                c2--
            } 
        }
        else{ //direita
            if (c2 == fim){
                //alert('Já chegou no último')
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




// FUNÇÃO RESPONSÁVEL POR REGIR E ARMAZENAR OS MONSTROS SELECIONADOS

function selecionar(){
    if (nome[c1] == nome[c2]){
        alert(`Escolha mosntros diferentes para batalhar`)
    }
    else{
        sessionStorage.setItem('c1', c1)
        sessionStorage.setItem('c2', c2)

        window.location.href = '../paginas/batalha.html'
    }
    
    //alert(`Valor do c1 é ${c1} e c2 é ${c2}`)

}




// FUNÇÃO RESPONSÁVEL POR RESGATAR OS VALORES DE C1 E C2

function processarC(){
    c1 = parseInt(sessionStorage.getItem('c1'))
    c2 = parseInt(sessionStorage.getItem('c2'))
    //alert(`Valor do c1 é ${c1} e c2 é ${c2}`)    
    exibir()
}




// FUNÇÃO RESPONSÁVEL PELA AÇÃO DE ATAQUE DO SEU MONSTRO

function atacar(){
    if (energia[c1] >= energiaAtaque){
        
        if(vida[c2] > 0 && vida[c1] > 0 && vida[c2] - dano[c1] > 0 && vida[c1] - dano[c2] > 0){

            energia[c1] -= energiaAtaque
            /*
            vida[c2] -= dano[c1]
            alert(`Você ATACOU ${nome[c2]} e deixou ele com ${vida[c2]} de vida`)
            */
            acaoInimigo()
        }
        else if(vida[c2] - dano[c1] <= 0){ // Vitória
            alert(`Você VENCEU! Muito bem`)
            src[c2] = `${imagemDerrotado}`
            vida[c2] = 0
            ocultar_controle()
        }
        else if(vida[c1] - dano[c2] <= 0){ // Derrota
            alert(`Você PERDEU! Tente novamente`)
            src[c1] = `${imagemDerrotado}`
            vida[c1] = 0
            ocultar_controle()
        }
        else{ // ERRO ou INVÁLIDO
            alert("ERROR")
        }
        exibir() 
        }
    else{
        energiaMsgRecarregar()
    }
}




// FUNÇÃO RESPONSÁVEL PELA AÇÃO DE DEFESA DO SEU MONSTRO

function defender(){
    if(energia[c1] >= energiaDefesa){ 
        
        if(vida[c2] > 0 && vida[c1] > 0  && vida[c2] - dano[c1] > 0 && vida[c1] - dano[c2] > 0){

            if (energia[c2] >= energiaAtaque){ 

                let possibilidades = ['Defesa', 'MeiaDefesa', 'ContraGolpe']
                let resultado = possibilidades[Math.floor(Math.random()*possibilidades.length)]


                if(resultado == 'Defesa'){ // defesa
                    alert(`Você DEFENDEU o ataque`)
                }
                else if(resultado == 'MeiaDefesa'){ // meia defesa
                    vida[c1] -= dano[c2] / 2
                    alert(`Você DEFENDEU PARTE do ataque, recebendo ${dano[c2]/2} de dano e ficando com ${vida[c1]} de vida`)
                }
                else{ //Interceptar
                    let ataque = (dano[c1] / 3).toFixed(0)
                    vida[c2] -= ataque
                    alert(`Você INTERCEPTOU o ataque de ${nome[c2]}, causando ${ataque} de DANO a ele`)
                    
                    /*
                    vida[c2] -= dano[c1]
                    alert(`Depois disso atacou novamente, CAUSANDO ${dano[c1]} e deixando ${nome[c2]} com ${vida[c2]} de vida`)
                    */
                }
                energia[c1] -= energiaDefesa
                energia[c2] -= energiaAtaque
            }
            else{
                alert(`Você não pode defender pois ${nome[c2]} não tem energia para te atacar`)
                
            }
            
        }
        else if(vida[c2] - dano[c1] <= 0){ // Vitória
            alert(`Você VENCEU! Muito bem`)
            src[c2] = `${imagemDerrotado}`
            vida[c2] = 0
            ocultar_controle()
        }
        else if(vida[c1] - dano[c2] <= 0){ // Derrota
            alert(`${nome[c2]} NOCAUTEOU-LHE! Você PERDEU! Tente novamente`)
            src[c1] = `${imagemDerrotado}`
            vida[c1] = 0
            ocultar_controle()
        }
        else{ // ERRO ou INVÁLIDO
            alert("ERROR")
        }

    }else{
        energiaMsgRecarregar()
    }
    exibir()
}




// FUNÇÃO RESPONSÁVEL PELA AÇÃO DE RECARREGAR DE AMBOS OS MONSTROS

function recarregar(c){
    if(c == c1){
        if(energia[c] == energiaMax){
        alert(`Sua energia já está no máximo!`)
        }
        else{
            if(energia[c] + energiaRecarga > energiaMax){
                energia[c] = energiaMax
            }
            else{
                energia[c] += energiaRecarga 
            }
            alert(`Recarga efetuada`)
            
            // Inimigo ataca
            acaoInimigo("recarga_c1")
        }  
    }
    else if (c == c2){
        if(energia[c] + energiaRecarga > energiaMax){
            energia[c] = energiaMax
        }
        else{
            energia[c] += energiaRecarga 
        }
        alert(`${nome[c]} recarregou`)
    }
    exibir()
}



// FUNÇÃO RESPONSÁVEL PELAS AÇÕES DO MONSTRO ADVERSÁRIO

function acaoInimigo(local=''){
    
    if(local == 'recarga_c1'){
        if(energia[c2] >= energiaAtaque){
            if(vida[c1] - dano[c2] > 0){
                energia[c2] -= energiaAtaque
                vida[c1] -= dano[c2]
                alert(`${nome[c2]} ATACOU-LHE deixando-o com ${vida[c1]} de vida!`)
            }
            else{
                alert(`${nome[c2]} ATACOU-LHE enquanto você se recarregava! Você foi ELIMINADO!`)
                src[c1] = `${imagemDerrotado}`
                vida[c1] = 0
                ocultar_controle()
            }
            

        }
        else{
            recarregar(c2)
        }
    }
    else{            
        let possibilidades = ['Atacar', 'Defender']
        resultado = possibilidades[Math.floor(Math.random()*possibilidades.length)]

        if(resultado == 'Atacar'){
            if(energia[c2] >= energiaAtaque){
                energia[c2] -= energiaAtaque
                vida[c2] -= dano[c1]
                alert(`Você ATACOU ${nome[c2]} deixando ele com ${vida[c2]} de vida!`)
                vida[c1] -= dano[c2]
                alert(`${nome[c2]} CONTRA-ATACOU deixando ele com ${vida[c1]} de vida!`)
            }
            else{
                vida[c2] -= dano[c1]
                alert(`Você ATACOU ${nome[c2]} deixando ele com ${vida[c2]} de vida!`)
                recarregar(c2)
            }
                
        }
        else{ //defender
            let possibilidades = ['Defesa', 'MeiaDefesa', 'ContraGolpe']
            let resultado = possibilidades[Math.floor(Math.random()*possibilidades.length)]

            if(energia[c2] >= energiaDefesa){  
                

                if(resultado == 'Defesa'){
                    alert(`${nome[c2]} DEFENDEU o ataque`) // defesa
                }
                else if(resultado == 'MeiaDefesa'){ // meia defesa
                    vida[c2] -= dano[c1] / 2
                    alert(`${nome[c2]} DEFENDEU PARTE do ataque, recebendo ${dano[c1]/2} de dano e ficando com ${vida[c2]} de vida`)
                }
                else{ // interceptar
                    let ataque = (dano[c2] / 3).toFixed(0)
                    vida[c1] -= ataque
                    alert(`${nome[c2]} INTERCEPTOU o ataque de ${nome[c1]}, causando ${ataque} de DANO a ele`)
                    /*
                    vida[c1] -= dano[c2]
                    alert(`Depois disso atacou novamente, CAUSANDO ${dano[c2]} e deixando ${nome[c1]} com ${vida[c1]}de vida`)
                    */
                    
                }
                energia[c2] -= energiaDefesa
                
            }
            else{
                vida[c2] -= dano[c1]
                alert(`Você ATACOU ${nome[c2]} deixando ele com ${vida[c2]} de vida!`)
                recarregar(c2)
            }
        }
    }
    exibir()
}




function ocultar_controle(){
    let controle = document.getElementById("acoes")
    controle.style.display = 'none'
}
