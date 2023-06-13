class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        this.VEL = 100;
    }
    create() {
        //add backgrounds
        this.add.image(0, 0, 'Sky').setOrigin(0, 0,); //add background sky
        this.clouds = this.add.tileSprite(0, -49, 512, 256, 'Clouds').setOrigin(0, 0); //add clouds
        this.ground = this.add.tileSprite(0, 187, 512, 64, 'Ground').setOrigin(0, 0); //add ground
        this.bushes = this.add.tileSprite(0, 212, 512, 32, 'Bushes').setOrigin(0, 0); //add bushes
        //add collider to floor
        this.floor = this.physics.add.image(0, 193).setOrigin(0, 0);
        this.floor.displayHeight = 32;
        this.floor.displayWidth = 320;
        this.floor.body.setAllowGravity(false);
        this.floor.setImmovable(true);
        //add protagonist sprite
        this.protag = new Protag(this, 32, 32, 'protag').setOrigin(0, 0);
        this.protag.play('walkR');
        this.protag.body.setCollideWorldBounds(true);
        //add player input to scene
        this.cursors = this.input.keyboard.createCursorKeys();
        //make sprite collide with floor
        this.physics.add.collider(this.protag, this.floor, null, function(){
            isJumping = false;
        });

        //add bird
        this.birds = new Birds(this, game.config.width/2, game.config.height/5, 'Birds');
        this.birds.play('fly');

        //bird hurt kiddo
        this.physics.add.overlap(this.birds, this.protag, () => {
            this.protag.destroy();
            // this.score += 20;
            //this.scene.start('gameOverScene'); add game over scene
        });

        //bird collide w ground
        
    }
    update(){
        //make backgrounds scroll
        this.protag.update();
        this.birds.update();
        this.clouds.tilePositionX += 0.3;
        this.ground.tilePositionX += 0.6;
        this.bushes.tilePositionX += 1.2;

        playerPosX = this.protag.x;
        playerPosY = this.protag.y;

    }
}
