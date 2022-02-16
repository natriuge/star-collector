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

// Array com os elementos, tamanhos ainda pendentes
const elements = [
  {img:starImg, width:300, heigth: 300},
  {img:superStarImg, width:100, heigth: 100}, 
  {img:meteorImg, width:150, heigth: 150},
]


// Classe do personagem
class characterPlayer {
  // Recebe respectivamente:
  constructor(x, y, width, height, img) {
    this.x = x; // Coordenada x
    this.y = y; // Coordenada y
    this.width = width; // Largura do personagem
    this.height = height; // Altura do personagem
    this.img = img; // Imagem do personagem
    this.speedX = 0; // Velocidade no eixo x
    this.speedY = 0; // Velocidade no eixo y
    this.starsCounter = 0; // Inicia com 0 estrelas
  }
}


// Classe do jogo
class Game {
  // Recebe respectivamente:
  constructor(background, player) {
    this.background = background; // Imagem de fundo
    this.player = player; // Imagem do personagem
    this.elements = []; // Array de elementos
    this.frames = 0; 
    this.score = 0; // Contagem de estrelas
    this.animationId; 
  }
}






// Evento Listener que atualiza a página:
window.addEventListener("load", () => {
    
  // Recebe respectivamente:
  // 01. Imagem de fundo
  // 02. Coordenada x
  // 03. Coordenada y
  // 04. Largura
  // 05. Altura
  ctx.drawImage(bgImgCanvas, 0, 0, 1000, 700) 

})


  