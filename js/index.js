
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

// Array com os elementos, tamanhos atualizados
const elements = [
  {img:starImg, width:65, heigth: 120},
  {img:superStarImg, width:65, heigth: 120}, 
  {img:meteorImg, width:60, heigth: 120},
]








// Evento Listener que atualiza a página:
window.addEventListener("load", () => {
    
  // Recebe respectivamente:
  // 01. Imagem de fundo
  // 02. Coordenada x
  // 03. Coordenada y
  // 04. Largura
  // 05. Altura
  ctx.drawImage(bgImgCanvas, 0, 0, 1000, 700) 
  // ctx.drawImage(characterImg, 100, 550, 100, 130)
  // ctx.drawImage(starImg, 200, 0, 65, 120)
  // ctx.drawImage(superStarImg, 300, 0, 65, 120)
  // ctx.drawImage(meteorImg, 400, 0, 60, 120)

  document.getElementById


})


  