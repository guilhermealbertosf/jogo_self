 
/*Musica de combate

    audio.play();  // Reproduz o áudio
    audio.pause();  // Pausa o áudio
    audio.currentTime = 10; // Muda para 10 segundos
    audio.volume = 0.5; // Define o volume para 50%
*/
function musica(pagina=0){
    let musica_combate = document.getElementById("musicacombate")
    if(pagina == 0){
        musica_combate.pause()
    }
    else{
        if (pagina == 1){
            musica_combate.currentTime = 0
        }else if(pagina == 2){
            musica_combate.currentTime = 60
            musica_combate.volume = 0.2
        }else if(pagina == 3){
            musica_combate.currentTime = 48
            musica_combate.volume = 0.6
        }
        
        
        musica_combate.play()
    }
    
}







