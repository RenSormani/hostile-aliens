//Create an enemy class with key/value pairs
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

    //draws the enemy forcefield in white. When health is less than 10, enemy loses forcefield
    draw(ctx){
        ctx.fillStyle = this.color;
        if(this.health > 10) {
            ctx.strokeStyle = "white";
        } else {
            ctx.strokeStyle = this.color;
        }

        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.strokeRect(this.x, this.y, this.width, this.height)

    // draws text to display enemy health
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