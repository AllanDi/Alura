function draw() {
  background(imagemEstrada);
  mostraAtor();
  movimentaAtor();
  mostraCarros();
  movimentaCarros();
  posicaoInicialCarros();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
  somTrilha.setVolume(0.1); 
}
