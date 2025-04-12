//Elemente DOM
const boxPrincipale= document.querySelector(".BoxPrincipale");
const videos = document.querySelectorAll("video");
const iconvolume = document.querySelectorAll(".volume"); // Corretto il selettore per le icone del volume

// Variabile globale
let screenMezzo = window.innerHeight/2;  /*dvide misura dello scherno in 2 */
let volumEnable = false;
//function

boxPrincipale.addEventListener("scroll",function(){     //ascolta lo scroll e fa partire il video
    videos.forEach(function(vid){
        const posizVideo=vid.getBoundingClientRect(); /* indica la posizione attuale del video*/
        if(posizVideo.top < screenMezzo && posizVideo.top >= 0){
            vid.play()
        }else{
            vid.pause()
        }
    })
})

iconvolume.forEach(function(audio){
    audio.addEventListener("click", function(){     //ascolta il clik e fa partire audio
        volumEnable= !volumEnable  //inverete false/true (tipo ON/OFF)

        videos.forEach(function(vid){       //su tutti video
            if(volumEnable == true){
                vid.muted = false;
            }else {
                vid.muted = true
            }
        })
        // cambio icon del audio
        let classIcon = ""
        if(volumEnable == true){
            classIcon = "fa-solid fa-volume-high volume"
        }else{
            classIcon = "fa-solid fa-volume-xmark volume"
        }

        iconvolume.forEach(function(para){
            para.className = classIcon
        })
    })
})

// PAUSA su video
videos.forEach(function (vid) {
    vid.addEventListener("click",function () {
        const isPaused = vid.paused; // Usa la proprietà booleana paused

        if(isPaused) {
            vid.play();
        }else {
            vid.pause();
        }
    })
})
































