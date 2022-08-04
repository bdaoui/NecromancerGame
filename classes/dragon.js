class Dragon extends Unit{

    constructor(position, img, name){
        super(position, img, name);
        this.anger = false;
    }

    meeting(){

        console.log(this.anger);

        if(this.anger === false){
            console.log(this.anger);
            this.question();
            console.log(this.anger);
        }

        else{
            this.attack();
        }
    }
    

    question(){
        document.querySelector("#status").innerText = "Cats, or Dogs?"
        let questions = document.querySelectorAll(".question");

        questions.forEach(element =>{
            element.style.display = "unset";
        })

        document.querySelector("#option1").onclick = () => gameOver();
        document.querySelector("#option2").onclick = () => this.attack();

    }


    attack(){
        this.anger = true; 

        let questions = document.querySelectorAll(".question");
        questions.forEach(element =>{
            element.style.display = "none";
        })

        document.querySelector("#status").innerText = "Obviously...What? The King hates cats?"
        king.walls = 0;

        fire.dimension = [100, 150];
        fire.draw();

    }

}