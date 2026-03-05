const audio = document.getElementById('music-audio');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.querySelector('.progress-container');
const playButton = document.getElementById('play-button');

// Toggle play/pause
playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  }else {
    audio.pause();
  }
});

// Update the progress bar as the song plays
audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
}

// Allow seeking when clicking on the progress bar
progressContainer.addEventListener('click', setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}


