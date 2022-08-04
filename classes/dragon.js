class Dragon extends Unit{

    constructor(position, img, name){
        super(position, img, name);
        this.anger = false;
        this.fire = true;
    }

    meeting(){
 
        // if the dragon is not angry, it will just talk
        if(this.anger === false){
            this.question();
        }

        // if the dragon has already been angered it will attack the King

        else if(this.fire === true){
            this.attack();
        }

    
    }
    

    question(){
        document.querySelector("#status").innerText = "Think carefully. Cats or Dogs?"

   

        let questions = document.querySelectorAll(".question");
        questions.forEach(element =>{
            element.style.display = "unset";
        })

        document.querySelector("#option1").onclick = () => gameOver();
        document.querySelector("#option2").onclick = () => this.attack();

    }


    attack(){
        this.anger = true; 
        this.fire = false;

        let questions = document.querySelectorAll(".question");
        questions.forEach(element =>{
            element.style.display = "none";
        })


        document.querySelector("#status").innerText = "Obviously...What? The King hates cats?"
        king.walls = 0;

        fire.dimension = [100, 150];
        setTimeout(fire.draw(), 50000);

    }

}