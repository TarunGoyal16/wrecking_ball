class Ball {
    constructor(x,y,r){
        var option={
            restitution:0.8,
            density:1
            

        }
        this.radius=r
        this.body=Bodies.circle(x,y,r,option)
        World.add(myworld,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS)
        fill("black")
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}