var video = document.getElementById("videoSurf") 

function playPause() {
    if (video.paused)
        video.play();
    else
        video.pause();
}

function mudo() {
    if (video.volume == 0.0)
        video.volume = 1.0
    else
        video.volume = 0.0
}

function aumentar() {
    video.volume += 0.1
}

function diminuir() {
    video.volume -= 0.1
}

function mini() {
    video.width = 480
}

function normal() {
    video.width = 800
}

function aumentarTela() {
    video.width = 1300;
}

function tela_cheia() {
    video.requestFullscreen();
}
