import Bullet from "./bullet.js";

//Create a BulletController class. Create an array of bullets for many bullets.
export default class BulletController{
    bullets = [];
    timeTillNextBullet = 0;

    constructor(canvas){
        this.canvas = canvas;
    }
    shoot(x, y, speed, damage, delay){
        if(this.timeTillNextBullet <= 0){
            this.bullets.push(new Bullet(x, y, speed, damage));
            this.timeTillNextBullet = delay;
        }
//This decreases the value of the time until the next bullet
        this.timeTillNextBullet--;
    }

//Remove bullets from the array when they go off the screen
    draw(ctx) {
        this.bullets.forEach((bullet) => {
            if(this.isBulletOffScreen(bullet)){
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1)
            }
        bullet.draw(ctx);
      });
    }

//Query the bullets list to see if a bullet is hitting a sprite
    collideWith(sprite){
        return this.bullets.some(bullet => {
            if(bullet.collideWith(sprite)){
                this.bullets.splice(this.bullets.indexOf(bullet),1);
                return true;
            }
            return false;
        })
    }

//Removes bullet once it is off the screen
    isBulletOffScreen(bullet){
        return bullet.y <= -bullet.height;
    }
}