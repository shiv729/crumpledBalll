class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.1,
            length:40
        }
        this.Slingshot= Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    
    display(){
    
        if(this.Slingshot.bodyA){
            var posA= this.Slingshot.bodyA.position ;//position is x and y coordinates
            var posB= this.Slingshot.pointB ;//pointb already has x and y values, so position is not needed
             //line(start x, start y, end x, end y)
             strokeWeight(4);
             stroke(40,16,5);
             line(posA.x,posA.y,posB.x,posB.y);
            
        }
}
// constraint is feature that connect two bodies
//you dont need to write 'function' in a class
fly(){
    this.Slingshot.bodyA=null
    //to remove the bird from the body completely 
    //its free now;; gets destoryed temporarily 
}

}
/*
class name{ //extends parentclass
   // arg1,2,3...they are all your values you want to pass through the sketch.js

constructor(arg1,arg,2,arg3){
    //properties
    var options= {

    }
    this.entity = Bodies .rectangle....
}

methodname(){

}

}
*/
