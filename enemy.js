export default class Enemy {
    constructor( x, y, color, health, name, damagePoints) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.health = health;
        this.width = 50;
        this.height = 50;
        this.name = name;
        this.damagePoints = damagePoints;
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        if(this.health > 10) {
            ctx.strokeStyle = "white";
        } else {
            ctx.strokeStyle = this.color;
        }

        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.strokeRect(this.x, this.y, this.width, this.height)

    // draw text
        ctx.fillStyle = 'yellow';
        ctx.font = '14px Orbitron'
        ctx.fillText(
            this.health, 
            this.x+this.width/4.3, 
            this.y+this.height /1.6
            );
        }

    takeDamage(){
        this.health -= this.damagePoints;
    }

    die() {
        this.health = 0;
    }
};

// To make the damage on the ships random implement this code...
// function takeDamage = () => {
    //     const randomIndex = Math.floor(Math.random() * enemies.length);
    //     const randomEnemy = enemies[randomIndex];
    //     randomEnemy.takeDamage();

    //     if (randomEnemy.health <= 0 && randomEnemy.name === "motherShip") {
    //       displayGameOver();
    //     } else if (randomEnemy.health <= 0) {
    //       enemies.splice(randomIndex, 1);
    //     }
    //     die ()
    //   };

