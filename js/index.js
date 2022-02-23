
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Imagem de fundo do jogo
const bgImgCanvas = new Image ();
bgImgCanvas.src = './images/background.png';

const gameOverImg = new Image ();
gameOverImg.src = './images/gameover.png';

// Imagem da estrela
const starImg = new Image();
starImg.src = './images/star.png';

// Imagem da super estrela
const superStarImg = new Image();
superStarImg.src = './images/super star.png';

// Imagem do meteoro
const meteorImg = new Image();
meteorImg.src = './images/meteor.png';

// Array com os elementos, tamanhos atualizados
const elements = [
  {img:starImg, width:65, heigth: 120, elementPoints: 1},
  {img:superStarImg, width:65, heigth: 120, elementPoints: 3}, 
  {img:meteorImg, width:60, heigth: 120, elementPoints: -1}

]

const instructionsImg = new Image();
instructionsImg.src = './images/instructions.png'

const elementSound = new Audio();
elementSound.src='./sounds/element-sound.mp3';
elementSound.volume = 1;

const startSound = new Audio();
startSound.src = './sounds/title-sound.wav'
startSound.volume = 0.1;
startSound.loop = true;

//Como mudar a sprite do personagem quando o botão da direita é acionado?


function startGame() { 
 
  const bgImgCanvas = new Image ();
  bgImgCanvas.src = './images/background2.png';

  const characterImg = new Image();
  characterImg.src = './images/mage.png';
  
  const backgroundImage = new BackgroundImage (0, 0, canvas.width, canvas.height, bgImgCanvas);
  // const maxYMage = canvas.height - 130;
  // const characterImage = new GameObject(500, canvas.height - 130, 100, 130, characterImg, maxYMage, 0);

  const game = new Game(backgroundImage); 

  game.start();

  document.addEventListener("keydown", (event) => {
      if (event.code === "ArrowLeft") {
        game.player.speedX = -4;
      } else if (event.code === "ArrowUp") {
        game.player.speedY = -4;
      } else if (event.code === "ArrowRight") {
        game.player.speedX = 4;
      } else if (event.code === "ArrowDown") {
        game.player.speedY= 4;
      }
    });

    document.addEventListener("keyup", () => {
      game.player.speedX = 0;
      game.player.speedY = 0;
    })
         
}




window.addEventListener("load", () => {


  ctx.drawImage(bgImgCanvas, 0, 0, 1000, 700)

  document.getElementById("start-button").onclick = () => {
    
    document.getElementById("start-screen").style.display = "none";

    ctx.drawImage(instructionsImg, 0, 0, 1000, 700)

    document.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {

        startGame();

        startSound.play();

      };

    });

  };
  
});


