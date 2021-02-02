const audio = document.querySelector('audio');
const playButton = document.querySelector('#play-button');
const slider = document.querySelector('#slider');
const forward = document.querySelector('#forward');
const showCurrentTime = document.querySelector('#current-time')
const showDurationTime = document.querySelector('#duration-time')
const volumeSlider = document.querySelector('#volume')

volumeSlider.addEventListener('click',(event)=>{
  console.log(audio.volume);
})
volumeSlider.addEventListener('change', (event) =>{
 audio.volume = event.target.value / 10;
})

forward.addEventListener('click', (event)=>{
  audio.currentTime += 5;
})
forward.addEventListener('mousedown',(event)=>{
  forwardTime = setInterval(()=>{
    audio.currentTime += 10;
  },1000)
})

forward.addEventListener('mouseup',(event)=>{
  clearInterval(forwardTime);
})

audio.addEventListener('play', (event) => {
  console.log(`${event.type} happend`);
});

audio.addEventListener('loadstart', (event) => {
  console.log(`${event.type} happend`);
  sound.pause();
});
audio.addEventListener('ended', (event) => {
  console.log(`${event.type} happend`);
});

audio.addEventListener('progress', (event) => {
  console.log(`${event.type} happend`);
});

playButton.addEventListener('click', (event) => {
  togglePlay();
});

window.onload = function () {
  volumeSlider.value = 10;
  volumeSlider.max = 10;

  slider.max = audio.duration;
  slider.value = audio.currentTime;

  let s = parseInt(audio.duration % 60);
  let m = parseInt((audio.duration / 60) % 60);
  showDurationTime.innerHTML = m + ':' + s;
  
};

slider.addEventListener('change', (event)=>{
  audio.currentTime = event.target.value
})


function setSlider() {
  slider.value = audio.currentTime;
  let s = parseInt(audio.currentTime % 60);
  let m = parseInt((audio.currentTime / 60) % 60);
  showCurrentTime.innerHTML = m + ':' + s;
  
};

function togglePlay(e) {
  e = window.event;
  let btn = e.target;

  if (audio.paused) {
    btn.src = './img/pause.svg';
    checkCurrentTime = setInterval(setSlider, 1000);
    audio.play();
    isPlaying = true;
  } else {
    btn.src = './img/play.svg';
    audio.pause();
    isPlaying = false;
    clearInterval(checkCurrentTime);
  }
}
