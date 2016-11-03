var sun, cloud, tree, pumpkin, moon, treedead;
var seasons = ['summer', 'fall', 'winter', 'spring'];
var clouds = [];
var cuecloudz = true;

function preload() {
  sun = loadImage('data/sun.png');
  cloud = loadImage('data/cloud[1].png');
  pumpkin = loadImage('data/pumpkin.png');
  tree = loadImage('data/Pine_Tree[1].png');
  treedead = loadImage('data/tree-dead.png');

}

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {

  background(100);

  image(treedead, 100, 100);
  if (cuecloudz === true) {
    cloudz();
    cuecloudz = false;
  }
  if (cueBirds === false) {
    for (var i = 0; i < cloudz.length; i++) {

      cloudz[i].run();
      if (cloudz[i].isDead()) {
        cloudz.splice(i, 1);
      }
    }
  }

}

function cloudz() {
  for (var i = 0; i < 15; i += 5) {
    var b = new image(cloud, createVector(0, random(0, 250)));
    clouds.push(b);
  }
}