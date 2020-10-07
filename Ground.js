class Ground{
    constructor(x, y, width, height, ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
         
        }
        this.body = Bodies.rectangle(250,540,20,options);
        this.width = width;


        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;

        push();
        translate(this.body.position.x, this.body.position.y);
  
        rectMode(CENTER);
       
        pop();
      }
}