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

const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
  cursor.style = `transform: translate(${e.clientX}px, ${e.clientY}px)`;
});

window.addEventListener('DOMContentLoaded', () => {
  addStar(10);
});

const strengthItems = document.querySelectorAll(".strength-item");
strengthItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    const player = item.querySelector("lottie-player");
    player.setDirection(1);
    player.play();
  });

  item.addEventListener("mouseleave", () => {
    const player = item.querySelector("lottie-player");
    player.setDirection(-1);
    player.play();
  });
});

