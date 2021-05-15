class ground {
    constructor(x,y,width,height,angle){
        var options={
            'isStatic':true

        }
        this.body=Bodies.rectangle(x,y,width,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        
       rectMode(CENTER);
       fill('brown'); 
        rect(0,0,this.width,this.height)
       
       

    }
}