class Mango{
    constructor(x,y){
    var options = {
     //restitution:0,
     isStatic:true,
     friction:1,
     density:2   
    }
    this.object=Bodies.rectangle(x,y,50,50,options)
    this.width = 50
    this.height = 50
    this.image = loadImage("sprites/m.png")
    World.add(world,this.object)
    }   
    display(){
       push(); 
    imageMode(CENTER)
    image(this.image,this.object.position.x,this.object.position.y,this.width,this.height)
    pop();
    } 
    }