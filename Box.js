class Box {

    constructor(x,y,width,height) {
    var box_option = {
      restitution: 1
    }

    this.body = Bodies.rectangle(x,y,width,height,box_option);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    World.add(world,this.body);
    }

    display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    console.log(this.body.position)

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("blue");
    rect(0,0,this.width,this.height);
    pop();
    
    }
}