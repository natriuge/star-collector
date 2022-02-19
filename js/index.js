
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Imagem de fundo do jogo
const bgImgCanvas = new Image ();
bgImgCanvas.src = './images/background.png';

// Imagem do personagem
const characterImg = new Image();
characterImg.src = './images/mage.png';

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
  {img:meteorImg, width:60, heigth: 120, elementPoints: -1},
]


// function drawCanvas() {
//   ctx.drawImage(starImg, 200, 0, 65, 120);
//   ctx.drawImage(superStarImg, 300, 0, 65, 120);
//   ctx.drawImage(meteorImg, 400, 0, 60, 120)
// }


function startGame() { 
 
  const bgImgCanvas = new Image ();
  bgImgCanvas.src = './images/background2.png';

  const characterImg = new Image();
  characterImg.src = './images/mage.png';
  
  const backgroundImage = new BackgroundImage (0, 0, canvas.width, canvas.height, bgImgCanvas);
  const characterImage = new GameObject(500, canvas.height - 130, 100, 130, characterImg);
     
  const game = new Game(backgroundImage, characterImage); 

  game.start();

  document.addEventListener("keydown", (event) => {
      if (event.code === "ArrowLeft") {
        game.player.speedX = -3;
      } else if (event.code === "ArrowUp") {
        game.player.speedY = -4;
      } else if (event.code === "ArrowRight") {
        game.player.speedX = 3;
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

  // ctx.drawImage(bgImgCanvas, 0, 0, 1000, 700) 
  // ctx.drawImage(characterImg, 100, 550, 100, 130)
  // ctx.drawImage(starImg, 200, 0, 65, 120)
  // ctx.drawImage(superStarImg, 300, 0, 65, 120)
  // ctx.drawImage(meteorImg, 400, 0, 60, 120)

  document.getElementById("start-button").onclick = () => {
    
    document.getElementById("start-screen").style.display = "none";
    
    startGame();
  };

})


