//Variáveis dos carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40,100,150, 210, 270, 318];
let larguraCarro = 50;
let alturaCarro = 40;
let velocidadeCarros = [2, 3, 3.5, 5, 3.3, 1];

function mostraCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}

function movimentaCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
  xCarros[i] -= velocidadeCarros[i];
  }
}

function posicaoInicialCarros() {
  for ( let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaTela(xCarros[i])){
    xCarros[i] = 600;
    }  
  }
}

function passouTodaTela(xCarros) {
  return xCarros <- 50;
}
