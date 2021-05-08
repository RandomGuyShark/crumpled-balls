class Paper{
    constructor(x,y,height,width){
        this.body = Bodies.rectangle(x,y,height,width);
        World.add(world, this.body) 
        this.height = height
        this.width = width
        this.polygon_img=loadImage("paper.png");
    }
    display(){
        
        push()
        image(this.polygon_img,this.body.position.x,this.body.position.y,this.width,this.height)
        translate(this.body.position.x,this.body.position.y);
        
        //strokeWeight(4);
        
       
        imageMode(CENTER);
        //image(this.polygon_img,this.body.position.x,this.body.position.y,this.width,this.height)
        //rect(0,0,this.dustbinWidth, this.wallThickness);
        pop()
    }
}