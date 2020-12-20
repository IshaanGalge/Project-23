class Box {

    constructor(x,y,width,height){
        engine = Engine.create();
	    world = engine.world;

    

        this.body=Bodies.rectangle(x,y,width,height)
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
        fill("red")
        rect(0,0,this.width,this.height)
        pop()
    }
}
