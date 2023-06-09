class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    create() {
        //add backgrounds
        this.add.image(0, 0, 'Sky').setOrigin(0, 0,); //add background sky
        this.clouds = this.add.tileSprite(0, -49, 512, 256, 'Clouds').setOrigin(0, 0); //add clouds
        this.ground = this.add.tileSprite(0, 187, 512, 64, 'Ground').setOrigin(0, 0); //add ground
        this.bushes = this.add.tileSprite(0, 212, 512, 32, 'Bushes').setOrigin(0, 0); //add bushes
      
        //add groundboxthis.groundbox = this.physics.add.image(0, 0, '').setOrigin(0, 0,); 
        
    }
    update(){
        //make backgrounds scroll
        this.clouds.tilePositionX += 0.3;
        this.ground.tilePositionX += 0.6;
        this.bushes.tilePositionX += 1.2;

        
    }
}
