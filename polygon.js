class Polygon{
    constructor(x, y,radius, angle){
        var options ={
            restitution :0.1,
            friction :0.1,
            density :0.4
            
        }
        this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius;
        this.image = loadImage("polygon.png");
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
   push()
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }

        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
        pop()
    }
}