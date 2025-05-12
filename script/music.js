const music = document.getElementById('background-music');
const button = document.getElementById('music-button');

function toggleMusic() {
  if (music.paused) {
    music.muted = false;  // desativa o mute
    music.play();
    button.innerText = '⏸️ Pausar Música';
  } else {
    music.pause();
    button.innerText = '🎵 Tocar Música';
  }
}
