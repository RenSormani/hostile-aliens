//create class of Bullet
export default class Bullet {
    constructor(x, y, speed, damage){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;

        this.width = 5;
        this.height = 15;
        this.color = "red";
    }

    //draw the bullets and set direction of the bullet
    draw(ctx){
        ctx.fillStyle = this.color;
        this.y -= this.speed;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    //Implements collision detection between 2 boxes. Uses x and y coordinates of two boxes, then notifies sprite it has taken damage.
    collideWith(sprite){
        if(this.x < sprite.x + sprite.width &&
            this.x + this.width > sprite.x &&
            this.y < sprite.y + sprite.height &&
            this.y + this.height > sprite.y
            ) {
                sprite.takeDamage(this.damage);
                return true;
            }
            return false
    }
}