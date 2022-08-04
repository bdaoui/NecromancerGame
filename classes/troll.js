class Troll extends Unit{


    constructor(position, img, name){
        super(position, img, name);
        
        this.life = 10000;
        this.lifepool = 10000;

    }




    

    fight(){

        if(necromancer.zVillagers >0 && this.lifepool >0){
            
            this.lifepool -= Math.round(necromancer.zVillagers/100);


            necromancer.zVillagers--;
            document.querySelector("#villagers").innerText = necromancer.zVillagers;

            

        }

        else if(this.lifepool <=0){
            necromancer.summon("troll");
            this.life = this.life*2;
            let newLifepool = this.life;
            this.lifepool = newLifepool;
        }

        else{
            return gameOver()};

       

    }


}