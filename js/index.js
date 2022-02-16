const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Imagem de fundo do jogo
const bgImgCanvas = new Image ();
bgImgCanvas.src = '/images/background.png';

// Imagem do personagem
const characterImg = new Image();
characterImg.src = '/images/mage.png';

// Imagem da estrela
const starImg = new Image();
starImg.src = '/images/star.png';

// Imagem da super estrela
const superStarImg = new Image();
superStarImg.src = '/images/super star.png';

// Imagem do meteoro
const meteorImg = new Image();
meteorImg.src = '/images/meteor.png';





window.addEventListener("load", () => {
    
  // Evento Listener que atualiza a página:
  // Recebe: Imagem de fundo, posição x, posição y, largura e altura. // 
  ctx.drawImage(bgImgCanvas, 0, 0, 1000, 700) 

})


  