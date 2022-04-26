//Variáveis bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;
let raio = diametro / 2;

//Variáveis raquete
let larguraRaquete = 10;
let alturaRaquete = 100;
let xRaquete = 5;
let yRaquete = 150;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let velocidadeYMinharaquete;

//Placar do jogo
let corFontePlacar = 255;
let tamanhoFontePlacar = 30;
let meusPontos = 0;
let pontosOponente = 0;

//Sons do Jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
  trilha = loadSound("trilha.mp3");
  trilha.setVolume(0.1);  
}

//Colisao
let colidiu = false;

//Chance de erro oponente
let chanceErroOponente = 0;

//----------------------------------------
function draw() {
  background(0);
  
  //Bolinha
  mostraBolinha();
  movimentaBolinha();
  
  //Raquete
  mostraRaquete(xRaquete,yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  
  //Raquetes Manuais
  movimentaMinhaRaquete();
  movimentaRaqueteOponenteManual();
  
  //Raquetes Automaticas
  //movimentaRaqueteOponente();
  //movimentaMinhaRaqueteAuto();
  
  //Placar do jogo
  incluiPlacar();
  marcaPonto();
  
  //Colisão
  colisaoBolinhaBorda();
  
  //Colisão raquete Copiada 2dCollider
  colisaoBolinhaRaqueteBiblioteca(xRaquete, yRaquete);
  colisaoBolinhaRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  
  //Colisão raquete Manual
  //colisaoBolinhaRaquete();
    
}
//----------------------------------------

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);  
}

function mostraRaquete(x,y) {
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function movimentaMinhaRaquete() {
  if (keyIsDown(87)) {
    yRaquete -= 10;
  }  
  if (keyIsDown(83)) {
    yRaquete += 10;
  }
}

function movimentaRaqueteOponenteManual() {
  if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente -= 10;
  }  
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 10;
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}

function movimentaMinhaRaqueteAuto() {
  velocidadeYMinharaquete = yBolinha - yRaquete - larguraRaquete / 2 - 30;
  yRaquete += velocidadeYMinharaquete;  
}

function marcaPonto() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosOponente += 1;
    ponto.play();
  }  
}

function colisaoBolinhaBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }  
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;    
  }
}

function colisaoBolinhaRaquete() {
  if (xBolinha - raio < xRaquete + larguraRaquete && yBolinha - raio < yRaquete + alturaRaquete && yBolinha + raio > yRaquete - alturaRaquete)  {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }  
}

function colisaoBolinhaRaqueteBiblioteca(x,y) {
  colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu ) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}
