document.addEventListener('DOMContentLoaded', (event) => {
    const mainScreen = document.getElementById('main-screen');
    const introScreen = document.getElementById('intro-screen');
    const newGame = document.getElementById('new-game');
  
    newGame.addEventListener('click', function() {
      mainScreen.classList.remove('active');
      introScreen.classList.add('active');
    });
  });
  