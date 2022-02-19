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

      if (this.x <= 0) {
        this.x = 0;
      }
      
      if (this.x >= canvas.width - 100) {
        this.x = canvas.width - 100;
      }
      
      if (this.y <= 0) {
        this.y = 0;
      }
      
      if (this.y >= canvas.height - 130) {
        this.y = canvas.height - 130;
      }
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
      ctx.drawImage (this.img, 0, this.y + this.img.height, this.width, this.height);
    } else {
        ctx.drawImage (this.img, 0, this.y - canvas.height, this.width, this.height);
    }
  }
}
    
    
class Game {
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




    

    
    

    
    
   