// Here we get the canvas from the HTML and declare a ctx so we can draw on it

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");




// Grab Start and End Screen

let startScreen = document.querySelector("#start-screen");
let gameScreen = document.querySelector("#game-screen");
let endScreen = document.querySelector("#end-screen");



// We load the page and start the game when the appropriate button is clicked

window.onload = () => {
    document.querySelector("#start-game").onclick = () => startGame();
    gameScreen.style.display = "none";
    endScreen.style.display = "none";

}




     //  Set the duration of the game, the intervalID and the gameOver


    let intervalId = 0;
    let gameOver = false;



    // Draw the various Icons on their position
    // It's better to have an object that contain all the drawImage info



    let necromancer = new Image();
    let unitKing = new Image();
    let unitForest = new Image();
    let unitVillage = new Image();
    let unitTroll = new Image();
    let unitDragon = new Image();

    let necromancerPosition = {
        x: 20,
        y: 20,
        width: 60,
        height: 50
    }


    let unitKingPosition = {
        x: 420,
        y: 220,
        width: 60,
        height: 50
    }


    let unitForestPosition = {
        x: 220,
        y: 20,
        width: 60,
        height: 50
    }


    let unitVillagePosition ={
        x: 120,
        y: 320,
        width: 60,
        height:50
    }

    let unitTrollPosition ={
        x: 20,
        y: 120,
        width: 60,
        height:50,
        life: 1000
    }

    let unitDragonPosition ={
        x: 820,
        y: 20,
        width: 60,
        height:50
    }


    // Zombie Counters

    let zAnimals = 0;
    let zVillagers =0;
    let zTroll = 0;
    let zDragons = 0;

    let zArmy = 0;

    // Add a listener for the keydown event
    // check if outside border, if not
    // clear old frame
    // add new frame

    document.addEventListener("keydown", event =>{
        switch(event.code){
            case "ArrowRight":
                if(necromancerPosition.x <800){
                    ctx.clearRect(necromancerPosition.x, necromancerPosition.y, canvas.width, canvas.height);
                    necromancerPosition.x += 100;
                }
                break;
            case "ArrowLeft":
               if(necromancerPosition.x >20){
                    ctx.clearRect(necromancerPosition.x, necromancerPosition.y, canvas.width, canvas.height);
                    necromancerPosition.x -= 100;
               }
                break;
            case "ArrowUp":
                if(necromancerPosition.y >20){
                    ctx.clearRect(necromancerPosition.x, necromancerPosition.y, canvas.width, canvas.height);
                    necromancerPosition.y -= 100;
                }
                break;
            case "ArrowDown":
                if(necromancerPosition.y <400){
                    ctx.clearRect(necromancerPosition.x, necromancerPosition.y, canvas.width, canvas.height);
                    necromancerPosition.y += 100;
                }
                break;
        }

        // This works too, but switch is less confusing I think
        // if(event.code === "ArrowRight"){
        //     ctx.clearRect(necromancerPosition.x, necromancerPosition.y, canvas.width, canvas.height);
        //     necromancerPosition.x += 100;
        // }

    });


function startGame(){
    if(!gameOver){

    // Hide Start and End Screen

    gameScreen.style.display ="flex";
    startScreen.style.display = "none";


    // Here we are specifing the type of lines (outlines, what is around the shapes) and their thickness

    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;

    // Now we create a loop for the colums
    // How?
    // We loop over width and height with the size of the squares we want to create.
    // Then we use lineTo to add a new point and createn a line to that point from a last specified point. This does not draw the line. It is the Stroke() that always draw what before were only invisible lines

    // Here's the Width


    for(i=0; i<=900; i +=100){

        ctx.moveTo(i,0);
        ctx.lineTo(i,900);
        ctx.stroke();

    }


    // Here's the Height

    for(i=0; i<=500; i +=100){

        ctx.moveTo(0,i);
        ctx.lineTo(5400, i);
        ctx.stroke();
    }





    function draw(){
        unitKing.onload = function (){
            ctx.drawImage(unitKing, unitKingPosition.x, unitKingPosition.y, unitKingPosition.width, unitKingPosition.height);
        }
        unitKing.src = "./img/crown.png";

        unitForest.onload = function (){
            ctx.drawImage(unitForest, unitForestPosition.x, unitForestPosition.y, unitForestPosition.width, unitForestPosition.height);
        }
        unitForest.src = "./img/forest.png";

        unitVillage.onload = function (){
            ctx.drawImage(unitVillage, unitVillagePosition.x, unitVillagePosition.y, unitVillagePosition.width, unitVillagePosition.height);
        }
        unitVillage.src = "./img/village.png";

        unitTroll.onload = function (){
            ctx.drawImage(unitTroll, unitTrollPosition.x, unitTrollPosition.y, unitTrollPosition.width, unitTrollPosition.height);
        }
        unitTroll.src = "./img/troll.png";


        unitDragon.onload = function (){
            ctx.drawImage(unitDragon, unitDragonPosition.x, unitDragonPosition.y, unitDragonPosition.width, unitDragonPosition.height);
        }
        unitDragon.src = "./img/dragon.png";


        necromancer.onload = function (){
            ctx.drawImage(necromancer, necromancerPosition.x, necromancerPosition.y, necromancerPosition.width, necromancerPosition.height);
        }
        necromancer.src = "./img/necromancer.png";
    }

    draw();

    intervalId = requestAnimationFrame(startGame);

    zArmy = zAnimals+zVillagers+zTroll+zDragons;

    function summon(){

        if(necromancerPosition.x === unitForestPosition.x && necromancerPosition.y === unitForestPosition.y) {
            zAnimals++
            document.querySelector("#animals").innerText = zAnimals;


         }

         else if(necromancerPosition.x === unitVillagePosition.x && necromancerPosition.y === unitVillagePosition.y){
            zVillagers += Math.floor(zAnimals/100);
            document.querySelector("#villagers").innerText = zVillagers;

         }

         // Summon Tough Enemies


         else if(necromancerPosition.x === unitTrollPosition.x && necromancerPosition.y === unitTrollPosition.y){
            
            
            if(unitTrollPosition.life >0 && zVillagers >0){
            unitTrollPosition.life -= zVillagers;
            zVillagers--
            document.querySelector("#villagers").innerText = zVillagers;

            }
            else if(unitTrollPosition.life <= 0){
                unitTrollPosition.life = 1000;
                zTroll++;
                document.querySelector("#troll").innerText = zTroll;
            }

            else if(zVillagers <= 0){
                alert("Animals cannot use fire, the troll eats you and your zombie beasts rot in its den");
                return gameOver;
            }


         }


    }

    summon();



    }

    else{
        cancelAnimationFrame(intervalId);
        canvas.style.display = "none";
        endScreen.style.display ="unset";
}




}

