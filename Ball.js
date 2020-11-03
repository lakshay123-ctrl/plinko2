class Plinko {
  constructor(x,y,radius) {
    var options = {
        restitution:0.5,
        friction:0.1,
        density:0.4,
        isStatic:true
          
        
    }
   
    this.radius = 10;
    this.x = x;
    this.y = y;
   
    this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
    World.add(world, this.body);
  }
  display(){
    push();
    var pos =this.body.position;
  
    var angle = this.body.angle;
    
    translate(pos.x,pos.y);
    rotate (angle);
    ellipseMode(RADIUS);
    ellipse( 0, 0, this.radius, this.radius);
    pop();
  }
}
  