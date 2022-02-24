class GameObject {
  constructor(x, y, width, height, img, maxY, maxX, elementPoints) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
    this.maxY = maxY;
    this.maxX = maxX;
    this.speedX = 0;
    this.speedY = 0;
    this.elementPoints = elementPoints;
  }

  updatePosition() {

    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x <= 0) {
      this.x = 0;
    }
  
    if (this.x >= canvas.width - this.width) {
      this.x = canvas.width - this.width;
    }

    if (this.y <= 0) {
      this.y = 0;
    }

    if (this.y >= this.maxY) {
      this.y = this.maxY;
    }
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    
  }

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

const characterImg = new Image();
characterImg.src = './images/mage.png';



const newPlayer = new GameObject(500, canvas.height - 130, 100, 130, characterImg, canvas.height - 132 , canvas.width - 100, 0);


let timer;

class Game {
  constructor(background, player) {
    this.background = background;
    this.player = newPlayer;
    this.elements = [];
    this.frames = 0;
    this.score = 0;
    this.animationId;
    this.timeLeft = 30;
  }

  start() {
    this.updateGame();
    this.startTimer();
    this.updateTimer();
  }

  updateTimer = () => {
    this.timeLeft--;

    if (this.timeLeft >= 0) {
    } else {
      this.checkGameOver();
    }
  };

  timerScreen() {
    ctx.font = "20px 'Press Start 2P'";
    ctx.fillStyle = "black";
    ctx.fillText(`Timer: ${this.timeLeft}`, 50, 105);
  }

  startTimer() {
    setInterval(this.updateTimer, 1000);
  }

  updateGame = () => {
    this.clear();

    this.background.updatePosition();

    this.background.draw();

    this.player.updatePosition();

    this.player.draw();

    this.updateElements();

    this.elements.forEach((element) => {
      this.crashWith(element);
    });

    this.updateScore();

    this.timerScreen();

    this.animationId = requestAnimationFrame(this.updateGame);

  };

  updateElements() {
    this.frames++;

    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].updatePosition();
      this.elements[i].draw();
    }

    if (this.frames % 60 === 0) {
      const originY = 0;
      const minX = 0;
      const maxX = canvas.width;
      const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;

      const randomIndex = Math.floor(Math.random() * elements.length);
      const maxYElement = canvas.height - 0;
      const maxXElement = canvas.width - 0;

      const element = new GameObject(
        randomX,
        originY,
        elements[randomIndex].width,
        elements[randomIndex].heigth,
        elements[randomIndex].img,
        maxYElement,
        maxXElement,
        elements[randomIndex].elementPoints
      );

      element.speedY = 8;

      this.elements.push(element);

      elementSound.play();

    }
  }

  crashWith = (element) => {
    if (
      !(
        this.player.bottom() < element.top() ||
        this.player.top() > element.bottom() ||
        this.player.right() < element.left() ||
        this.player.left() > element.right()
      )
    ) {
      this.score += element.elementPoints;

      element.elementPoints = 0;
      element.x = 5000;
      element.y = 5000;
      

      return true;
    }
    return false;
  };

  updateScore(){
    ctx.font = "20px 'Press Start 2P'";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${this.score}`, 50, 75);
  }

  checkGameOver = () => {
    if (this.timeLeft <= 0) {
      cancelAnimationFrame(this.animationId);

      this.gameOver();
    }
  };

  gameOver() {
    this.clear();

    ctx.drawImage(gameOverImg, 0, 0, 1000, 700);

    ctx.font = "80px 'Press Start 2P'";
    ctx.fillStyle = "black";
    ctx.fillText(`${this.score}`, 420, 400);

    ctx.beginPath();
    ctx.fillStyle = "rgba(225,225,225,0.1)";

    var box = {
      x: 414,
      y: 545,
      w: 172,
      h: 60,
    };

    ctx.fillRect(box.x, box.y, box.w, box.h);
    canvas.addEventListener("click", function (ev) {
      var { x, y } = getCursorPosition(canvas, ev);

      if (
        box.x <= x &&
        x <= box.x + box.w &&
        box.y <= y &&
        y <= box.y + box.h
      ) {
        location.reload();
      }
    });

    function getCursorPosition(canvas, ev) {
      var rect = canvas.getBoundingClientRect();
      var x = ev.clientX - rect.left;
      var y = ev.clientY - rect.top;
      return { x, y };
    }
  }

  clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
}
