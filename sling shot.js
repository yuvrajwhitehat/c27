class slingShot {
    constructor (bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.04
        }
        this.slingShot=Constraint.create(options)
        World.add(world,this,slingShot)
    }
display(){
    var pointA=this.slingShot.bodyA.position
var pointB=this.slingShot.bodyB.position
line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}