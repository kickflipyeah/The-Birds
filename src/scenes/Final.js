class Final extends Phaser.Scene {
    constructor() {
        super("finalScene");
    }

    create() {
        //add camera
        this.cameras.main.fadeIn(1000);
        this.add.image(0, 0, 'final-screen').setOrigin(0, 0,);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.sound.play('happyTrack', {volume: 0.5, loop: true});
      }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            // this.scene.stop('finalScene');
            this.sound.stopAll();
            this.sound.play('selectNoise');
            this.scene.start('menuScene');
          }
    }
}