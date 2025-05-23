 
/*Musica de combate

    audio.play();  // Reproduz o áudio
    audio.pause();  // Pausa o áudio
    audio.currentTime = 10; // Muda para 10 segundos
    audio.volume = 0.5; // Define o volume para 50%
*/



let estado = 'ON'
// Músicas
let botao_ligar_musica = document.getElementById("botao_ligar_musica")
let botao_mutar_musica = document.getElementById("botao_mutar_musica")
// Interface
let botao_fundo_claro = document.getElementById("botao_fundo_claro")
let botao_fundo_escuro = document.getElementById("botao_fundo_escuro")


let cor_marcacao = '#00bdff'



function mutar_ligar(estado){
    if(estado == 'ligar'){
        estado = sessionStorage.setItem('estado','ON')
        botao_ligar_musica.style.background = cor_marcacao
        botao_mutar_musica.style.background = 'white'
        
    }
    else{
        estado = sessionStorage.setItem('estado','OFF')
        botao_ligar_musica.style.background = 'white'
        botao_mutar_musica.style.background = cor_marcacao
    }
}
/*
function interface(cor){
    if (cor == 'claro'){
        botao_fundo_claro.style.background = cor_marcacao
        botao_fundo_escuro.style.background = 'white'
    
    }
    else{
        botao_fundo_claro.style.background = 'white'
        botao_fundo_escuro.style.background = cor_marcacao
        document.body.style.background = 'gray'
        document.body.style.color = 'white'
    }
}
*/


function musica(pagina=0){
    estado = sessionStorage.getItem('estado')

    if(estado == 'ON'){
        
        let musica_combate = document.getElementById("musicacombate")
        if(pagina == 0){
            musica_combate.pause()
        }
        else{
            if (pagina == 1){
                //vazio: página index não possui musica.
            }else if(pagina == 2){
                musica_combate.currentTime = 60
                musica_combate.volume = 0.2
            }else if(pagina == 3){
                musica_combate.currentTime = 48
                musica_combate.volume = 0.2
            }
            
            
            musica_combate.play()
        }
    }
}







