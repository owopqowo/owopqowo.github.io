const MINWIDTH = 1200;
const strengthItems = document.querySelectorAll('.strength-item');
let timer;

function randomNumber(min, max) {
  return (Math.random() * (max - min) + min).toFixed(4);
}

function addStar(starNum) {
  const stars = document.querySelector('.intro-stars');
  const x1 = 0;
  const x2 = 150;
  const animationDelay1 = 0;
  const animationDelay2 = 3;
  const animationDuration1 = 2;
  const animationDuration2 = 3;
  for (let i = 0; i < starNum; i++) {
    const star = document.createElement('span');
    star.classList.add('star');
    const x = randomNumber(x1, x2);
    const animationDelay = randomNumber(animationDelay1, animationDelay2);
    const animationDuration = randomNumber(animationDuration1, animationDuration2);
    star.style.left = `${x}%`;
    star.style.animationDelay = `${animationDelay}s`;
    star.style.animationDuration = `${animationDuration}s`;
    stars.appendChild(star);
    star.addEventListener('animationend', (e) => {
      e.target.remove();
      addStar(1);
    });
  }
}

function matchMediaQuery(minWidth) {
  if (window.matchMedia(`(min-width: ${minWidth}px)`).matches) {
    const cursor = document.querySelector('.cursor');
    if (cursor) return;
    addEl('span', 'cursor');
  } else {
    removeEl('cursor');
  }
}

function addEl(tagName, className) {
  const item = document.createElement(tagName);
  const body = document.querySelector('body');
  item.classList.add(className);
  body.append(item);
}

function removeEl(className) {
  const item = document.querySelector(`.${className}`);
  if (!item) return;
  item.remove();
}

window.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  if (!cursor) return;
  cursor.style = `transform: translate(${e.clientX}px, ${e.clientY}px)`;
  if (e.target.tagName === 'A') {
    cursor.classList.add('active');
  } else {
    cursor.classList.remove('active');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  addStar(10);
  matchMediaQuery(MINWIDTH);
});

window.addEventListener('resize', () => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    matchMediaQuery(MINWIDTH);
  }, 1000);
});

strengthItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    const player = item.querySelector('lottie-player');
    player.setDirection(1);
    player.play();
  });

  item.addEventListener('mouseleave', () => {
    const player = item.querySelector('lottie-player');
    player.setDirection(-1);
    player.play();
  });
});
