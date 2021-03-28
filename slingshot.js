class Slingshot {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.a1 = Constraint.create(options)
        World.add(world,this.a1)
    }
    fly(){
        this.a1.bodyA = null
    }
    display(){
        if(this.a1.bodyA){
        line(this.a1.bodyA.position.x,this.a1.bodyA.position.y,this.a1.pointB.x,this.a1.pointB.y)
        }
    }
}