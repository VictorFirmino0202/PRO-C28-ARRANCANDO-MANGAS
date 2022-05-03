class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 30
        } 
        this.pointB = pointB;
        this.launcherObject = Constraint.create(options);
        World.add(world, this.launcherObject);
    }

    fly(){
        this.launcherObject.bodyA = null;

    }

    display(){
        
        var pointA = this.stoneObj.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(5);
        stroke("#301608");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();

        
    }
}