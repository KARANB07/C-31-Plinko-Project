class par{
    constructor(x,y,radius){
        var options={
            friction:0.5,
            density:1.2,
            isStatic:false
        }
        this.x=x
        this.y=y
        this.radius=radius
        this.body=Bodies.circle(this.x,this.y,10,options)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS)
        fill(this.color)
        circle(0,0,10);
        pop();
    }
}