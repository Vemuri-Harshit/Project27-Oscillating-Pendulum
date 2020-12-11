class SlingShot{
    constructor(bodyA,bodyB){
       var options={
           bodyA: bodyA,
           bodyB: bodyB,
           stiffness: 0.009,
           length: 100
       } 
      
      this.sling = Constraint.create(options);
      World.add(world,this.sling);

    };
    display(){
        var posA = this.sling.bodyA.position;
        var posB = this.sling.bodyB.position;
        if(this.sling.bodyA){
         
        
        
        strokeWeight(5);

        line(posA.x,posA.y,posB.x,posB.y);
    }
   



}
    
    
}