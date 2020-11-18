class Paper
{
    constructor(r)
{
    var option={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body=bodies.circle(20,20,this.r/2,options)
    this.x=20;
    this.y=20
    World.add(world,this.body);
}
display(){

    var paperpos=this.body.position;

    push()
    translate(paperpos.x,paperpos.y);
    rectMode(CENTER)
    strokeWeight(3)
    fill(225,0,255)
    ellipse(0,0,this.r,this.r);
    pop()
}
}