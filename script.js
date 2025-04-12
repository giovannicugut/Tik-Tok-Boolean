//Elemente DOM
const boxPrincipale= document.querySelector(".BoxPrincipale");
const videos = document.querySelectorAll("video");
const iconvolume = document.querySelectorAll(".volume"); // Corretto il selettore per le icone del volume
const  heart = document.querySelectorAll(".fa-heart");   // cuore
const commenti = document.querySelectorAll(".fa-comment");



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

// colora il cuore, attiva/disattiva la classe

heart.forEach((paramet) => {
    paramet.addEventListener("click", ()=>{
        paramet.classList.toggle("acivia")
    })
})

// aggiunge comments
commenti.forEach((par) =>{
    par.addEventListener("click", () =>{
        let textarea = par.parentElement.querySelector(".comment-area");
         if(!textarea) {
            const area = document.createElement("textarea") // Creiamo un nuovo elemento textarea
            area.classList.add("comment-area");             // Aggiungiamo una classe
            area.placeholder = "Scrivi il tuo commento..."  
            par.parentElement.appendChild(area)         // Aggiungiamo la textarea come figlio del genitore
         } else {
            textarea.remove(); 
         }
    })
})


































