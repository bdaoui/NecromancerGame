
class Character extends Unit{

    constructor(position, img){
        super(position, img);
        this.zAnimals = 0;
        this.zVillagers = 0;
        this.zTrolls = 0;
    }


    move(key){
       

        switch(key){
            case "ArrowUp":
                if(this.position[1] >20){
                    ctx.clearRect(this.position[0], this.position[1], this.dimension[0], this.dimension[1]);
                    necromancer.position[1] -= 100
                    this.draw();
            }
                break;
            case "ArrowDown":
                if(this.position[1] <420){
                    ctx.clearRect(this.position[0], this.position[1], this.dimension[0], this.dimension[1]);
                    necromancer.position[1] += 100
                    this.draw();
            }
                break;
            case "ArrowRight":
                if(this.position[0] <800){
                    ctx.clearRect(this.position[0], this.position[1], this.dimension[0], this.dimension[1]);
                    necromancer.position[0] += 100
                    this.draw();
            }
                break;
            case "ArrowLeft":
                if(this.position[0] >20){
                    ctx.clearRect(this.position[0], this.position[1], this.dimension[0], this.dimension[1]);
                    necromancer.position[0] -= 100
                    this.draw();
            }
                break;


        }
    }



    summon(where){

        if(where === "forest"){
            this.zAnimals++;
            document.querySelector("#animals").innerText = this.zAnimals;
        }


        if(where === "village"){
            this.zVillagers++;
            document.querySelector("#animals").innerText = this.zAnimals;
            document.querySelector("#villagers").innerText = this.zVillagers;
        }

        if(where === "troll"){
            this.zTrolls++;
            document.querySelector("#trolls").innerText = this.zTrolls;
        }

    }



}