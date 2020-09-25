
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var circ1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var circ1_options ={
        restitution: 1.0
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    circ1 = Bodies.circle(200, 100, 20, circ1_options);
    World.add(world,circ1);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(circ1.position.x, circ1.position.y, 20, 20);
}