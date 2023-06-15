class Credit extends Phaser.Scene {
    constructor() {
        super("creditScene");
    }

    create() {
        //add camera
        this.cameras.main.fadeIn(1000);
        this.add.image(0, 0, 'credits-page').setOrigin(0, 0,);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            // this.scene.stop('finalScene');
            this.sound.play('selectNoise');
            this.scene.start('playScene');
          }
    }
}
