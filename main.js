const playBtn = document.querySelector('.play_btn');
const bgSound = document.querySelector('.bg_sound');
const alert = document.querySelector('.alert');
const alertSound = document.querySelector('.alert_sound');
const timer = document.querySelector('.timer');

let setTime = 10;
const timerPlayer = () => {
  timer.textContent = `00 : ${setTime.toString().padStart(2, '0')}`;
  if (setTime > 0) {
    setTime = setTime - 1;
  } else if (setTime == 0) {
    playBtn.style.opacity = '0';
    bgSound.pause();
    alert.style.display = 'flex';
  }
};

playBtn.addEventListener('click', () => {
  const Iplay = '<i class="fa-solid fa-play"></i>';
  const Istop = '<i class="fa-solid fa-stop"></i>';
  if (playBtn.innerHTML == Iplay) {
    playBtn.innerHTML = Istop;
    bgSound.play();
    setInterval(timerPlayer, 1000);
  } else {
    playBtn.style.opacity = '0';
    bgSound.pause();
    alert.style.display = 'flex';
  }
});
