export default class Player{
    constructor(x,y, bulletController){
        this.x = x;
        this.y = y;
        this.bulletController = bulletController;
        this.width = 50;
        this.height = 50;
        this.speed = 4;

        document.addEventListener('keydown', this.keydown)
        document.addEventListener('keyup', this.keyup)
    }

    draw(ctx) {
        this.move();
        this.collideWithWalls();
        ctx.strokeStyle = "yellow";
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height)

        this.shoot();
    }

    //prevents the player from exceeding the canvas limits
    collideWithWalls() {
        //left
        if(this.x < 0){
            this.x = 0;
        }
        //right
        if(this.x > 500){
            this.x = 500;
        }

        //up
        if (this.y < 330){
            this.y = 330;
        }

        //down
        if (this.y > 550){
            this.y = 550;
        }
    }

    //Adjusts the speed/delay/damage of the bullets
    shoot(){
        if(this.shootPressed){
            console.log('shoot');
            const speed = 5;
            const delay = 7;
            let damage = 9;
            const bulletX = this.x + this.width/2;
            const bulletY = this.y;
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
    }

    move() {
        if(this.downPressed){
            this.y += this.speed;
        }
        if(this.upPressed){
            this.y -= this.speed;
        }
        if(this.leftPressed){
            this.x -= this.speed
        }
        if(this.rightPressed){
            this.x += this.speed
        }
    }

    keydown = (e) => {
        if(e.code === "ArrowUp"){
            this.upPressed = true;
        }
        if(e.code === "ArrowDown"){
            this.downPressed = true;
        }
        if(e.code === "ArrowLeft"){
            this.leftPressed = true;
        }
        if(e.code === "ArrowRight"){
            this.rightPressed = true;
        }
        if(e.code === "Space"){
            this.shootPressed = true;
        }
    };

    keyup = (e) => {
        if(e.code === "ArrowUp"){
            this.upPressed = false;
        }
        if(e.code === "ArrowDown"){
            this.downPressed = false;
        }
        if(e.code === "ArrowLeft"){
            this.leftPressed = false;
        }
        if(e.code === "ArrowRight"){
            this.rightPressed = false;
        }
        if(e.code === "Space"){
            this.shootPressed = false;
        }
    };
}