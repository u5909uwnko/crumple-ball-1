class Bottom {
    constructor(x, y,width, angle) {
      var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
      }
      this.body = Bodies.rectangle(x, y, 10, height, options);
      this.width = width;
      this.height = 10;
      this.angle = angle;

      Matter.Body.setAngle(this.body,angle);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
  
      fill("white");
      strokeWeight(4);
      stroke('white');
      
      rect(0, 0, this.width, this.height);
      pop();
    }
  };