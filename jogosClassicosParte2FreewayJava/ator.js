//Variáveis do ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 30); 
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }  
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()) {
      yAtor += 3;
    }  
  } 
  
  //Ativar o x da vaca
  
  /*
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }  
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;  
  } 
  */
}

function verificaColisao() {
  
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao =  collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao) {
      voltaAtorPosicaoInicial();
      somColidiu.play();
      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }  
    }  
  }
}

function voltaAtorPosicaoInicial() {
  xAtor = 100;
  yAtor = 366;  
}

function incluiPontos() {
  textAlign(CENTER)
  textSize(25);
  fill(color(255,240,0))
  text(meusPontos, width / 5, 27);
}

function marcaPonto() {
  if (yAtor < 10) {
    meusPontos += 1;
    voltaAtorPosicaoInicial();
    somPonto.play();
  }  
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() {
  return yAtor < 366 
}


  
