// O jogo tem 1 jogador
// O objetivo do jogo é coletar o maior número de estrelas durante um periodo de tempo e desviar dos meteoros.
// O contador inicia no 0
// Caem do céu estrelas e meteoros aleatóriamente
// Estrelas comuns somam 1 ponto no score 
// Super estrelas somam 3 pontos no score
// Meteoros subtraem 2 pontos no score
// Ao final do timer o número de total do score é exibido


class GameObject {
  constructor(x, y, width, height, img) {
    this.x = x; 
    this.y = y; 
    this.width = width; 
    this.height = height; 
    this.img = img;
    this.speedX = 0; 
    this.speedY = 0;
    this.elementPoints = 0; 
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
    this.speedY = 3; 
  }

  updatePosition() {
    this.y += this.speedY;
    this.y %= canvas.height;
  }
        
  draw() {
  ctx.drawImage(this.img, 0, this.y, this.width, this.height);
  if (this.speedY < 0) {
          ctx.drawImage(
                    this.img,
                    0,
                    this.y + this.img.height,
                    this.width,
                    this.height
                    );
            } else {
      ctx.drawImage(
          this.img,
          0,
          this.y - canvas.height,
          this.width,
          this.height
          );
          }
        }
    }
    
    
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

        this.background.updatePosition();
        this.background.draw();

        this.player.updatePosition();
        this.player.draw();

        this.animationId = requestAnimationFrame(this.updateGame);

    }

    clear = () => {
        ctx.clearRect(0,0, canvas.width, canvas.height);

    }
}




    

    
    

    
    
   