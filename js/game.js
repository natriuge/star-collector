class GameObject {
  constructor(x, y, width, height, img, maxY, elementPoints) {
    this.x = x; 
    this.y = y; 
    this.width = width; 
    this.height = height; 
    this.img = img;
    this.maxY = maxY;
    this.speedX = 0; 
    this.speedY = 0;
    this.elementPoints = elementPoints; 
    };


  updatePosition() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x <= 0) {
        this.x = 0;
    };
    //largura do canvas - largura do personagem
    if (this.x >= canvas.width - this.width) {
      this.x = canvas.width - this.width;
    };
      
    if (this.y <= 0) {
      this.y = 0;
    };

    // largura do canvas - altura do personagem
    if (this.y >= this.maxY) {
       this.y = this.maxY ;
    };
  };


  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

  };

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
}



class BackgroundImage extends GameObject {
  constructor(x, y, width, height, img) {
    super(x, y, width, height, img);
    this.speedY = 3; 
  };

  updatePosition() {
    this.y += this.speedY;
    this.y %= canvas.height;
  };
        
  draw() {
    ctx.drawImage(this.img, 0, this.y, this.width, this.height);
    if (this.speedY < 0) {
      ctx.drawImage (this.img, 0, this.y + this.img.height, this.width, this.height);
    } else {
        ctx.drawImage (this.img, 0, this.y - canvas.height, this.width, this.height);
    };
  };
};

const characterImg = new Image();
  characterImg.src = './images/mage.png';

const newPlayer = new GameObject (500, canvas.height - 130, 100, 130, characterImg, 570, 0);

    
class Game {
  constructor(background, player) {
    this.background = background;
    this.player = newPlayer; 
    this.elements = [];
    this.frames = 0; 
    this.score = 0;
    this.animationId; 
  };

  start = () => {
    this.updateGame();
  };

  updateGame = () => {
    this.clear();

    this.background.updatePosition();
    this.background.draw();

    this.player.updatePosition();
    this.player.draw();

    this.updateElements();

    this.elements.forEach((element) => {
      this.crashWith(element)

    })


    this.updateTotal();

    this.animationId = requestAnimationFrame(this.updateGame);


  };

  updateElements = () => {
    this.frames++;

    for (let i = 0; i < this.elements.length; i++ ) {
      this.elements[i].updatePosition();
      this.elements[i].draw();
    }

    if (this.frames % 60 === 0) {

    const originY = 0;
    const minX = 0;
    const maxX = canvas.width;
    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

    const randomIndex = Math.floor(Math.random() * (elements.length));
    const maxYElement = canvas.height - 0;
    
    const element = new GameObject (randomX, originY, elements[randomIndex].width, elements[randomIndex].heigth, elements[randomIndex].img, maxYElement, elements[randomIndex].elementPoints);


    element.speedY = 8;

    this.elements.push(element);

    elementSound.play();

    }
  }


  crashWith = (element) => {
    if (!( this.player.bottom() < element.top() ||
      this.player.top() > element.bottom() ||
      this.player.right() < element.left() ||
      this.player.left() > element.right() ))
    
    {
      this.score += element.elementPoints
      element.x = 0;
      element.y = 0;
      
      return true
    }
      return false
  }

    updateTotal() {
      ctx.font = "25px Verdana";
      ctx.fillStyle = "black";
      ctx.fillText(`Score: ${this.score}`, 60, 75); 
    }
  

  clear = () => {
    ctx.clearRect(0,0, canvas.width, canvas.height);

  };
}







    

    
    

    
    
   