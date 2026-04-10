function setup() {
  createCanvas(800, 700);
  noStroke(); 
  
  // color beige del fondo
  background(242, 230, 210);

  // cuadrado rojo
  fill(220, 40, 30); 
  rect(285, 405, 255, 250);

  // triangulo amarillo
  fill(235, 190, 20);
  triangle(40, 265, 285, 120, 285, 405);

  // circulo azul
  fill(25, 45, 75);
  ellipse(635, 305, 280, 280);
}