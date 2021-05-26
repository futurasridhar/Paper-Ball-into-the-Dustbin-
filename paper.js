class Paper{

constructor (x,y,r) {

this.radius = r ;


var paperOptions = {

    isStatic : false, 
    restitution : 0.3,
    friction : 0,
    density : 1.2 
}
this.image = loadImage ("paper.png");
this.body = Bodies.circle (x,y,r/2-20,paperOptions);
World.add(world,this.body);

}


display()
{
        var pos =this.body.position;
        
        push();
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        imageMode(CENTER);
        image(this.image, 0,0,this.radius,this.radius);
        pop();
        
}


}