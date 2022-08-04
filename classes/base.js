class Unit{
    constructor(position, img, name){
        this.position = position;
        this.dimension = [60,50];
        this.img = "./img/"+img;
        this.name = name;
    }


    draw(){
        let icon = new Image();
        icon.src = this.img;
        return icon.onload = () =>ctx.drawImage(icon, this.position[0], this.position[1], this.dimension[0], this.dimension[1]);  
          
    }
}



