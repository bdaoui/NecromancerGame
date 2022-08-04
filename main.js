// Initial State

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let startScreen = document.querySelector("#start-screen");
let gameScreen = document.querySelector("#game-screen");
let endScreen = document.querySelector("#end-screen");

gameScreen.style.display = "none";
endScreen.style.display = "none";

// Initialize classes 

let forest = new Unit([20, 20], "forest.png", "forest");
let village = new Unit([120, 420], "village.png", "village" );

let troll = new Troll([220, 120], "troll.png", "troll", 1000);
let dragon = new Living([820, 20], "dragon.png", "dragon", 50000);
let king = new Living([420, 220], "crown.png", "king", 100000);

let necromancer = new Character([20, 220], "necromancer.png");

// List of all elements of the game

let allThings = [];
allThings.push(forest, village, troll, dragon, king);


// Start the game

document.querySelector("#start-game").onclick = () => startGame(); 


// Check controls and call methods to move and summon 

document.onkeydown = (event) =>{
    let key = event.code;
    necromancer.move(key);
    allDrawings();

}

// Check if there is a collision 

function collision(){
    let result = "";

    if(necromancer.position[0] === 20 && necromancer.position[1] === 220){
        return "startPosition";
    }

    else{
        allThings.forEach( element => { 
            if(necromancer.position[0] === element.position[0] && necromancer.position[1] === element.position[1]){
                result = element.name;
            }
        
        })
    }
    

    return result;

}


// Encounter Function

function encounter(placeOfCollision){
    switch(placeOfCollision){
        case "forest":
            necromancer.summon(placeOfCollision);
            break;
        case "village":
            if(necromancer.zAnimals>0){
                necromancer.zAnimals--;
                necromancer.summon(placeOfCollision);
            }   

            else{
                return gameOver();
            }
            break;

        case "troll":
            troll.fight();

            break;

    }

}


/// Random Number Generator from array

   function randomN(arr){
    return Math.floor(arr.length* Math.random())

}

// print stuff to the status bar

function log(placeOfCollision){ 
    let forestMaximae = ["Oh here we are in a forest", "Where are you bamby?", "Come kitty kitty", "They will never expect zombie bees", "why stop at wolves when I can have undead ducks", "These will only work on villagers", "Attacking the village will be easy now", "Even a bear won't do it against a troll", "These can catch villagers, but a troll? I don't think so..."];

    let villageMaximae = ["I should learn how animate skellies", "I don't get why they even try at this point", "Kill them all", "Now I have another zombie baby brigade", "I should make them bear toarches for me", "These zombie are way smarter than animals, they can use fire!", "Now I want to see how those troll will handle my army", "Trolls are vulnerable to fire", "Killing trolls with villagers will be as easy as killing villagers with beasts"];

    let trollMaximae =["These are hard to fell", "They keep regenerating, only fire can kill them", "Zombie animals are completely useless in this fight", "These creatures will serve me well when assaulting the capital", "Immagine if I fed the kind to a zombie troll"]


    switch(placeOfCollision){
        case "startPosition":
            if(necromancer.zAnimals < 0){
                document.querySelector("#status").innerText = "Let's start with some animals" ;
        }
        break;
        case "forest":
        document.querySelector("#status").innerText = forestMaximae[randomN(forestMaximae)] ;
        break;
        case "village":
        document.querySelector("#status").innerText = villageMaximae[randomN(villageMaximae)] ;
        break;
        case "troll":
            document.getElementById("life").style.display = "unset";
            document.getElementById("life").innerText = `Pissed Off Troll's Health: ${troll.lifepool}`;
            document.querySelector("#status").innerText = trollMaximae[randomN(trollMaximae)];

            break;

        default: 
        document.querySelector("#status").innerText = "Travelling";
        document.getElementById("life").style.display = "none";
    }

}


// Determine the speed of the game

function speed(){
    let defaultSpeed = 1000;
    let speedSelected = document.querySelector("#speed").value;
    return (defaultSpeed-(speedSelected*100));
}


// Function to draw the grid

function genGrid(){
    // determine the thickness of the stoke
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    // generate the colums
    for(i=0; i<=900; i +=100){

        ctx.moveTo(i,0);
        ctx.lineTo(i,900);
        ctx.stroke();

    }
    // generate rows
    for(i=0; i<=500; i +=100){

        ctx.moveTo(0,i);
        ctx.lineTo(5400, i);
        ctx.stroke();
    }
}

// function to group all the Unit that we need to draw 

function allDrawings(){
    genGrid();

    forest.draw();
    village.draw();
    
    troll.draw();
    king.draw();
    dragon.draw()

    necromancer.draw();

}



// The function to start the

function startGame(){
    gameScreen.style.display = "flex";
    endScreen.style.display = "none"; 
    startScreen.style.display = "none"; 


    // draw things
    allDrawings();


    update();
}


// Every tot seconds it will check for collision and then spawn an encounter

function update(){
    let placeOfCollision = collision();
    encounter(placeOfCollision);
    log(placeOfCollision);

    setTimeout(update, speed());

}


// End the Game
function gameOver(){
    gameScreen.style.display = "none";
    endScreen.style.display = "flex"; 
    startScreen.style.display = "none"; 

}