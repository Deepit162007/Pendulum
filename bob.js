class bob{
    constructer (x,y,width,height){
    var options = {
      isStatic:false,  
      restitution:0.3,
      friction:0.5,
      density:1.2
    
    }
    this.body = Bodies.rectangle(x,y,height,width,options);
    this.width=width;
    this.height=height;
    World.add(world, this.body)
    
    }


    













}