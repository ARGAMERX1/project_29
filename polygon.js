class Polygon{
    constructor(){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.body = Bodies.circle(250,200,20,options);
        this.width =33;
        this.image = loadImage("polygon.png");
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
   
        fill("white");

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
    }
}