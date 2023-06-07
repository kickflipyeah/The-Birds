class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    create() {
        //add scrolling background
        let groundX=this.sys.game.config.width/2;
        let groundY=this.sys.game.config.height * .9;
        this.sky = this.add.tileSprite(0, 0, game.config.width, 151, 'Sky').setOrigin(0, 0);
        this.ground = this.physics.add.image(groundX, groundY, 'Ground');
        this.ground.displayHeight=30;
        this.ground.body.setAllowGravity(false);
        this.ground.setImmovable();
        this.bushes = this.add.tileSprite(0, 151, game.config.width, 89, 'Bushes').setOrigin(0, 0);


        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0xfff5bb).setOrigin(0, 0);
    }

}
