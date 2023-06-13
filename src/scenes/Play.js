class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        this.VEL = 100;
    }
    create() {
        //add camera
        this.cameras.main.fadeIn(1000);
        //play suspensful music 
        this.sound.play('actionTrack', {volume: 0.5, loop: true});
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
        this.birds = new Birds(this, game.config.width/1.1, game.config.height/9, 'Birds');
        this.birds.play('fly');

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

        this.physics.add.collider(this.birds, this.protag, () => {
                //console.log("bird hit player");
                if (this.birds.body.touching.left == true){
                    this.birds.x += 60;
                    this.birds.y -= 60;
                    this.cameras.main.shake(100, 0.009);
                    this.protag.setAlpha(0.5);
                    this.time.delayedCall(1000, () => {
                        this.protag.setAlpha(1);
                    });
                    // let birdSpeedX = 30;
                    // let birdSpeedY = 30;
                    // this.physics.moveTo(this.birds, birdSpeedX, birdSpeedY, 1000, 100);
                    // console.log('bird touching left');
                }
                else if (this.birds.body.touching.right == true){
                    this.birds.x -= 60;
                    this.birds.y -= 60;
                    this.cameras.main.shake(100, 0.009);
                    // console.log('bird touching right');
                }
                else if (this.birds.body.touching.down == true){
                    //this.birds.x -= 30;
                    this.birds.y -= 60;
                    this.cameras.main.shake(100, 0.009);
                    this.protag.setAlpha(0.5);
                   
                    this.time.delayedCall(800, () => {
                        this.protag.setAlpha(1);
                    });
                    // console.log('bird touching down');
                }
                
            });
       

    }
}
