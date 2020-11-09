class Mango
{
    constructor(x,y,r)
    {
        var options={
            isStatic : true,
            friction: .5
        }

        this.body = Bodies.circle(x,y,r/2,options);
        this.radius = r;
        
        //load image for the mango
        this.image = loadImage("Images/mango.png")
        World.add(world, this.body)
    }

    display()
    {
        var pos = this.body.position;
        imageMode(CENTER);        
       
        image(this.image,pos.x,pos.y,this.radius,this.radius);

    }
   


}