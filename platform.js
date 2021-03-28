class Platform {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.w = width
        this.h = height
        this.x = x
        this.y = y
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        rectMode(CENTER)
        rect(this.x,this.y,this.w,this.h)
    }
}