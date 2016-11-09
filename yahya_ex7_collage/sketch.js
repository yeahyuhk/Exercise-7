var sun, cloud, tree, pumpkin, moon, treedead;
var seasons = ['summer', 'fall', 'winter', 'spring'];
var clouds = [];

function preload() {
  sun = loadImage('data/sun.png');
  moon = loadImage('data/moon.png');
  cloud = loadImage('data/cloud[1].png');
  pumpkin = loadImage('data/pumpkin.png');
  tree1 = loadImage('data/tree-live.png');
  tree3 = loadImage('data/Pine_Tree[1].png');
  tree2 = loadImage('data/tree-dead.png');

}

function setup() {
  createCanvas(700, 600);
  background(0);
}

function draw() {

  background(120, 180, 250);

  rect(0, 400, width, height);


  //ground
  noStroke();
  fill(50, 200, 100);



  image(tree1, 100, 100);
}

function tree(counter){
  if counter = 1{
    
  }
  
  
}