class Paper extends BaseClass{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        super(x,y,width,height)
        this.image = loadImage("paper.png");
}
}
