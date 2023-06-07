class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    create() {
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0xfff5bb).setOrigin(0, 0);
    }
}