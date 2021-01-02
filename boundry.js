class boundry
{
   constructor(x,y,w,h){
       var options={
           isStatic:true
       }
       this.x=1300;
       this.y=490;
       this.w=10;
       this.h=50;
       this.body=Bodies.rectangle(1300,490,10,50,options);
       World.add(world,this.body);
   }
display()
{
    var boundryPos=this.body.position;		

    push()
    translate(boundryPos.x,boundryPos.y);
    rectMode(CENTER)
    strokeWeight(0);
    fill(124,252,0)
    rect(0,0,10,50);
    pop()
    
}





}