class Boy
{
    constructor(x,y,width,height)
    {
        // var options={
        //     isStatic : true
        // }

       // this.body = Bodies.rectangle(x,y,width,height,options);
       this.xpos = x;
        this.ypos = y;
        this.width = width;
        this.height = height;
        //load image for the boy
        this.image = loadImage("Images/boy.png")
        //World.add(world, this.body)
    }

    display()
    {
        //var pos = this.body.position;
        imageMode(CENTER);
        
       
        image(this.image,this.xpos,this.ypos,this.width,this.height);


    }



}