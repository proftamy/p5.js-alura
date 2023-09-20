//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis do placar
let pontos = 0;
let pontos2 = 0;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

//sons do jogo
let raquetada;
let ponto;
let guitar;


function preload (){
  trilha =loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada =loadSound("raquetada.mp3");
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  movimentaRaqueteOponente();
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  colisaooponente();
  placar();
}

function mostraBolinha() {
  fill(255);
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete(x, y) {
  fill(255);
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio > yRaquete
  ) {
    velocidadeXBolinha *= -1;
  }
}

function mostraRaqueteOponente() {
  fill(255);
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}
//
//function movimentaRaqueteOponente() {
//  velocidadeYOponente =
//    yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
//  yRaqueteOponente += velocidadeYOponente;
//}

function colisaooponente() {
  if (xBolinha + raio > xRaqueteOponente) {
    velocidadeXBolinha *= -1;
  }
}

function placar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(pontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontos2, 470, 26);
  if (xBolinha > 590) {
    pontos += 1;
  }
  if (xBolinha < 10) {
    pontos2 += 1;
  }
}
function movimentaRaqueteOponente() { if(keyIsDown(87)) {
  yRaqueteOponente-= 10;
}
if (keyIsDown(83)) {
  yRaqueteOponente += 10;
}
}
