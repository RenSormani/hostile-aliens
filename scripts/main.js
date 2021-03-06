import Player from "./player.js"
import Enemy from "./enemy.js";
import BulletController from "./bulletController.js";

//create a game canvas
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 550;
canvas.height = 600;

const bulletController = new BulletController(canvas);

//create the player
const player = new Player(
    canvas.width / 2.2, 
    canvas.height / 1.3,
    bulletController
    );

// Creates an array of all ships (ie motherShip, defenceShips and attackShips) on the canvas
const enemiesArr = [
    new Enemy (250, 40, "red", 100, "motherShip", 9),
    new Enemy (50, 140, "green", 80, "defenceShip", 10),
    new Enemy (150, 140, "green", 80, "defenceShip", 10),
    new Enemy (250, 140, "green", 80, "defenceShip", 10),
    new Enemy (350, 140, "green", 80, "defenceShip", 10),
    new Enemy (450, 140, "green", 80, "defenceShip", 10),
    new Enemy (22, 240, "Purple", 45, "attackShip", 12),
    new Enemy (87, 240, "Purple", 45, "attackShip", 12),
    new Enemy (152, 240, "Purple", 45, "attackShip", 12),
    new Enemy (217, 240, "Purple", 45, "attackShip", 12),
    new Enemy (282, 240, "Purple", 45, "attackShip", 12),
    new Enemy (347, 240, "Purple", 45, "attackShip", 12),
    new Enemy (412, 240, "Purple", 45, "attackShip", 12),
    new Enemy (477, 240, "Purple", 45, "attackShip", 12),
]

let isGameOver = false;
let didWin = false;

//A gameLoop function to update all game logic
function gameLoop(){
        checkGameOver();
        setCommonStyle();    
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        displayGameOver();
        if (!isGameOver) {
            bulletController.draw(ctx);
            player.draw(ctx);
//Checks enemy's health if bullet collides with enemy, then removes enemy from array if <= 0
            enemiesArr.forEach((enemy) => {
                if(bulletController.collideWith(enemy)){
                    if(enemy.health <= 0){
                        const index = enemiesArr.indexOf(enemy);
                        enemiesArr.splice(index, 1);
                    }
                } else {
                enemy.draw(ctx);
            }
        });
    }
}

//display function to reveal "Winner Winner" if gameOver is true
function displayGameOver(){
    if (isGameOver) {
        let text = didWin ? "You Win" : "Winner winner!";
        let textOffset = didWin ? 3.5 : 12;

        ctx.fillStyle = "white";
        ctx.font = "70px Arial";
        ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
    }
}

const checkGameOver = () => {
    if (enemiesArr === false || !enemiesArr.some(enemy => enemy.name === "motherShip")) {
        isGameOver = true;
    }
}

//Sets the common style for all the on-screen characters
function setCommonStyle() {
    ctx.shadowColor = "#d53";
    ctx.shadowBlur = 20;
    ctx.lineJoin = "bevel";
    ctx.lineWidth = 5;
}

const resetGame = () => {
    window.location.reload();  
};

document.querySelector("#button").addEventListener("click", resetGame);

setInterval(gameLoop, 1000 / 60);
