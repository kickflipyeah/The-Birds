class Birds extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //add to existing scene
        scene.physics.add.existing(this); //add physics
        this.body.setSize(40, 15, true);
        //make birds fly by screen, shooting out smaller bird claws to attack the boy
        this.body.setAllowGravity(false);
       // this.body.setVelocityX(-100); //can make a bird speed variable
        this.anims.create({
            key: 'fly',
            frameRate: 4,
            frames: this.anims.generateFrameNumbers('Birds', { start: 0, end: 1 }),
            repeat: -1
        });
        this.isAlive = true; // add the isAlive property and initialize it to true
        this.hp = 5; // add the health property

    }
    update() {
        //destroy birds if they go off screen
        if (this.x < -20) {
            this.destroy();
        }
        //speed of bird
        let birdSpeedX = 50;
        let birdSpeedY = 40;
        let playerPos = new Phaser.Math.Vector2(playerPosX, playerPosY); //getting the number of the player position
        let birdsPos = new Phaser.Math.Vector2(this.x, this.y);
        let dir = playerPos.subtract(birdsPos); //getting the direction
        dir = dir.normalize(); //normalizing the direction
        this.body.setVelocityX(dir.x * birdSpeedX); //moving bird towards player
        this.body.setVelocityY(dir.y * birdSpeedY);
      
    }
}