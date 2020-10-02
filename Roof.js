class Roof
 {
    constructor(x, y,width,height) {
      var options = {
        isStatic:true,
          'restitution':0.8,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, 200,30);
      pop();
    }
  };
  