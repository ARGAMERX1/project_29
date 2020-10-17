class Polygon{
    constructor(){
        var options ={
            isStatic:false,
            restitution :0,
            friction :1,
            density :1.2
            
        }
        this.body = Bodies.circle(250,200,20,options);
        this.width =33;
        this.image = loadImage("polygon.png");
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
   push()
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }

        fill("white");

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
        pop()
    }
}