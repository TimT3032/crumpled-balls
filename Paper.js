class Paper {  
    constructor(x, y, radius)
    {
        var options = 
        {
            'restitution':1,
            'friction':99,
            'density':1.4,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
       
   }
   display()
   {
    fill("yellow");
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}