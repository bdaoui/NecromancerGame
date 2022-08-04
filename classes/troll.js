class Troll extends Unit{

    constructor(position, img, name, lifepool){
        super(position, img, name);
        this.lifepool = lifepool;
    }


    

    fight(){

        if(necromancer.zVillagers >0 && this.lifepool >0){
            this.lifepool -= necromancer.zVillagers;

            necromancer.zVillagers--;
            document.querySelector("#villagers").innerText = necromancer.zVillagers;

        }

        else if(this.lifepool <=0){
            necromancer.summon("troll");
            this.lifepool += 1000;
        }

        else{
            return gameOver()};

       

    }


}