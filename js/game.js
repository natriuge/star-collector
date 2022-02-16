// O jogo tem 1 jogador
// O objetivo do jogo é coletar o maior número de estrelas durante um periodo de tempo e desviar dos meteoros.
// O contador inicia no 0
// Caem do céu estrelas e meteoros aleatóriamente
// Estrelas comuns somam 1 ponto no score 
// Super estrelas somam 3 pontos no score
// Meteoros subtraem 2 pontos no score
// Ao final do timer o número de total do score é exibido

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
    draw() {
        ctx.drawImage(this.player)
      }
  }
  

// Classe do personagem
class Player {
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
  

  