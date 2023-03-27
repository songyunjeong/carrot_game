// play info
const playBtn = document.querySelector('.play_btn');
const bgSound = document.querySelector('.bg_sound');
const alert = document.querySelector('.alert');
const alertTxt = document.querySelector('.alert_txt');
const alertSound = document.querySelector('.alert_sound');
const counter = document.querySelector('.counter');
const timer = document.querySelector('.timer');
const replayBtn = document.querySelector('.replay_btn');
let carrotCount;

let setTime = 10;
const timerPlayer = () => {
  timer.textContent = `00 : ${setTime.toString().padStart(2, '0')}`;
  if (setTime > 0) {
    setTime = setTime - 1;
  }
};

playBtn.addEventListener('click', () => {
  const Iplay = '<i class="fa-solid fa-play"></i>';
  const Istop = '<i class="fa-solid fa-stop"></i>';
  let timerInterval = setInterval(() => {
    timerPlayer();
  }, 1000);
  if (playBtn.innerHTML == Iplay) {
    playBtn.innerHTML = Istop;
    carrotCount = 10;
    counter.innerHTML = carrotCount;
    bgSound.play();
    timerInterval;
  } else if (playBtn.innerHTML == Istop) {
    bgSound.pause();
    alertSound.play();
    alert.style.display = 'flex';
    alertTxt.innerHTML = 'Replay ?';
    playBtn.style.display = 'none';
  }
});

replayBtn.addEventListener('click', () => {
  alert.style.display = 'none';
  playBtn.style.display = 'block';
  bgSound.play();
});

// random position
const field = document.querySelector('.field');
const fieldRect = field.getBoundingClientRect();
for (let i = 1; i <= 10; i++) {
  const newCarrot = document.createElement('img');
  newCarrot.src = 'img/carrot.png';
  newCarrot.className = 'carrot' + i;
  field.appendChild(newCarrot);
  const x1 = Math.random() * (fieldRect.width - 80);
  const y1 = Math.random() * (fieldRect.height - 80);
  newCarrot.style.position = 'absolute';
  newCarrot.style.left = `${x1}px`;
  newCarrot.style.top = `${y1}px`;
  newCarrot.style.cursor = 'pointer';

  const newBug = document.createElement('img');
  newBug.src = 'img/bug.png';
  newBug.className = 'bug' + i;
  field.appendChild(newBug);
  const x2 = Math.random() * (fieldRect.width - 50);
  const y2 = Math.random() * (fieldRect.height - 50);
  newBug.style.position = 'absolute';
  newBug.style.left = `${x2}px`;
  newBug.style.top = `${y2}px`;
  newBug.style.cursor = 'pointer';
}

// click event
for (let i = 1; i <= 10; i++) {
  const carrot = document.querySelector('.carrot' + i);
  const carrotSound = document.querySelector('.carrot_sound');
  const bug = document.querySelector('.bug' + i);
  const bugSound = document.querySelector('.bug_sound');
  carrot.addEventListener('click', () => {
    carrot.style.display = 'none';
    carrotSound.play();
    carrotCount - 1;
    counter.innerHTML = carrotCount;
  });
  bug.addEventListener('click', () => {
    bug.style.display = 'none';
    bugSound.play();
    alert.style.display = 'flex';
    alertTxt.innerHTML = 'YOU LOST';
  });
}
