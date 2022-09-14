'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const TeVeomañana = () => {
    alert('💞 Te veo a las 2 en el centro 💞');
    alert('🤙 Tu eliges la peli 🤙');
    location.href = 'https://www.youtube.com/watch?v=0ggh3nJ0Yao&ab_channel=DarkHorseSUBS.';
  };

  const Nipp = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt(' Nombre ❤');
  heroTitle.innerHTML += partner + ' ❤';

  heroButtonSi.addEventListener('click', TeVeomañana);
  heroButtonNo.addEventListener('mouseover', Nipp);
};

document.addEventListener('DOMContentLoaded', documentReady);