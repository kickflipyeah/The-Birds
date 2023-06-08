class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    create() {
        //add scrolling background
        let groundX=this.sys.game.config.width/2;
        let groundY=this.sys.game.config.height * .9;
        this.sky = this.add.tileSprite(0, 0, game.config.width, 187, 'Sky').setOrigin(0, 0);
        this.groundbox = this.physics.add.image(groundX, groundY, 'Ground');
        this.groundbox.displayHeight=50;
        this.groundbox.body.setAllowGravity(false);
        this.groundbox.setImmovable();
        this.bushes = this.add.tileSprite(0, 209, game.config.width, 31, 'Bushes').setOrigin(0, 0); //209
        this.ground = this.add.tileSprite(0, 187, game.config.width, 259, 'Ground').setOrigin(0, 0);
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0xfff5bb).setOrigin(0, 0);
    }
    update(){

        
    }
}
