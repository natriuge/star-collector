// O jogo tem 1 jogador
// O objetivo do jogo é coletar o maior número de estrelas durante um periodo de tempo e desviar dos meteoros.
// O contador inicia no 0
// Caem do céu estrelas e meteoros aleatóriamente
// Estrelas comuns somam 1 ponto no score 
// Super estrelas somam 3 pontos no score
// Meteoros subtraem 2 pontos no score
// Ao final do timer o número de total do score é exibido

// Classe do personagem
class GameObject {
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

    updatePosition() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }
    }

    class BackgroundImage extends GameObject {
        constructor(x, y, width, height, img) {
          super(x, y, width, height, img);
          this.speedY = 2; 
        }
    }
    



// Classe do jogo
class Game {
    // Recebe respectivamente:
    constructor(background, player) {
      this.background = background;
      this.player = player; 
      this.elements = [];
      this.frames = 0; 
      this.score = 0;
      this.animationId; 
    }

    start = () => {
        this.updateGame();

    }

    updateGame = () => {
        this.clear();

        this.animationId = requestAnimationFrame(this.updateGame);

    }

    clear = () => {
        ctx.clearRect(0,0, canvas.width, canvas.height);

    }
}


    //definir loop
    //refreshanimationframe

    //dentro do loop:
    //movimento do player







function startGame(player) { 

    
    const bgImgCanvas = new Image ();
    bgImgCanvas.src = './images/background.png';

    const characterImg = new Image();
    characterImg.src = './images/mage.png';
    
    const backgroundImage = new BackgroundImage (0, 0, canvas.width, canvas.height, bgImgCanvas);
      
    const game = new Game(backgroundImage, player); 

    game.background.draw();
    game.player.draw();

        
}
    

    
    

    
    
   