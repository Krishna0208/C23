class Ground {
    constructor(x,y,width,height) {

    var ground_option = {
      isStatic: true
    }   

    this.body = Bodies.rectangle(x,y,width,height,ground_option);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    World.add(world,this.body);
    }

    display() {
    var pos = this.body.position;
    rectMode(CENTER)
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height);
    }
}