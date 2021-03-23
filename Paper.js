class Paper{
    constructor(x, y, rad) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.3
      }
      this.image=loadImage("paper.png");
      this.body = Bodies.circle(x, y, rad, options);
      this.rad = rad;

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      image(this.image,0, 0, this.rad*3,this.rad*3);
      pop();
    }
  };