class Pack {

    constructor(x,y,width,height){
        var options={restitution:0.8 ,isStatic:true}
        this.body=Bodies.rectangle(x,y,width,height ,options)
        this.width = width
        this.height = height
        var pos = this.body.position;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        strokeWeight(4)
        stroke("green")
        fill("yellow")
        rect(0,0,this.width,this.height)
        pop()
    }
}
