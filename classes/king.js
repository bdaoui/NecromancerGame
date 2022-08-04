class King extends Unit{

    constructor(position, img, name){
        super(position, img, name);
        this.walls = 100;
        this.alive = true;

    }



    massacre(){
        necromancer.zAnimals > 0? necromancer.zAnimals-- : necromancer.zAnimals = 0;
        necromancer.zVillagers > 0? necromancer.zVillagers-- : necromancer.zVillagers = 0;
        necromancer.zTrolls > 0? necromancer.zTrolls-- : necromancer.zTrolls = 0;

        document.querySelector("#animals").innerText = necromancer.zAnimals;
        document.querySelector("#villagers").innerText = necromancer.zVillagers;
        document.querySelector("#trolls").innerText = necromancer.zTrolls;

        if(necromancer.zAnimals === 0 && necromancer.zVillagers  === 0 && necromancer.zTrolls  === 0){
            return gameOver();
        }

    }

    castle(){
        return necromancer.zTrolls < this.walls  ? this.massacre() : gameOver(true);

    }

}
