class Paper{
    constructor(x,y,r){
      var options =  {
        density: 1.2,
      }    
      this.body=Bodies.circle(x,y,r,options);
      World.add(world,this.body);
    }
    display(r){
      this.radius=r;  
      push();
      fill("white");
      ellipseMode(CENTER);
      ellipse(this.body.position.x,this.body.position.y,this.radius)
      pop()
    }
}