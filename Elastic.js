class Elastic
{
   constructor(pointA,bodyB)
   {
      var options={
          pointA: pointA,
          bodyB: bodyB,
          stiffness:.004,
          length:10//,
          //damping:1
      }   
      this.pointA = pointA;
      this.body = Constraint.create(options);
      World.add(world,this.body);

   }
  


   display()
   {
      if(this.body.bodyB !==null)
      {
      var pointAPos = this.pointA;
      var pointB = this.body.bodyB.position;

      push();
        strokeWeight(4);
        line(pointAPos.x,pointAPos.y,pointB.x,pointB.y);
      pop();
      }
   }

   fly()
   {
       this.body.bodyB = null;
   }

   attach(stoneObj)
   {
      this.body.bodyB = stoneObj;
   }

}