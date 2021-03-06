
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const bgImgCanvas = new Image ();
bgImgCanvas.src = './images/background.png';

const gameOverImg = new Image ();
gameOverImg.src = './images/gameover.png';

const starImg = new Image();
starImg.src = './images/star.png';

const superStarImg = new Image();
superStarImg.src = './images/super star.png';

const meteorImg = new Image();
meteorImg.src = './images/meteor.png';


const elements = [
  {img:starImg, width:65, heigth: 120, elementPoints: 1},
  {img:superStarImg, width:65, heigth: 120, elementPoints: 3}, 
  {img:meteorImg, width:60, heigth: 120, elementPoints: -1},

];

const instructionsImg = new Image();
instructionsImg.src = './images/instructions.png';

const elementSound = new Audio();
elementSound.src='./sounds/element-sound.mp3';
elementSound.volume = 1;

const startSound = new Audio();
startSound.src = './sounds/title-sound.wav';
startSound.volume = 0.1;
startSound.loop = true;


const mageRight = new Image();
mageRight.src = './images/mage-right.png';

const mageLeft = new Image();
mageLeft.src = './images/mage-left.png';



function startGame() { 

 
  const bgImgCanvas = new Image ();
  bgImgCanvas.src = './images/background2.png';

  const characterImg = new Image();
  characterImg.src = './images/mage.png';
  
  const backgroundImage = new BackgroundImage (0, 0, canvas.width, canvas.height, bgImgCanvas);
 
  const game = new Game(backgroundImage); 

  game.start();


  document.addEventListener("keydown", (event) => {
  
      if (event.code === "ArrowLeft") {
        game.player.speedX = -5;
        game.player.img = mageLeft;
      } else if (event.code === "ArrowUp") {
        game.player.speedY = -5;
        game.player.img = game.player.img
      } else if (event.code === "ArrowRight") {
        game.player.speedX = 5;
        game.player.img = mageRight;
      } else if (event.code === "ArrowDown") {
        game.player.speedY= 5;
        game.player.img = game.player.img
      }
    });

    document.addEventListener("keyup", () => {
      game.player.speedX = 0;
      game.player.speedY = 0;
    })
};



window.addEventListener("load", () => {

  ctx.drawImage(bgImgCanvas, 0, 0, 1000, 700)

  window.addEventListener("keydown", (event) => {
    if (event.code === 'Enter') {
    
      document.getElementById("start-screen").style.display = "none";

      startGame();

      startSound.play();

    } 

  }, { once: true });

});


