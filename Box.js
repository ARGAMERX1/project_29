class Box{
    constructor(x, y, width, height) {
        var options = {
        
          restitution :1.2,
          friction :2.1,
          density :9
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
  
        push();
        translate(this.body.position.x, this.body.position.y);
    
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}