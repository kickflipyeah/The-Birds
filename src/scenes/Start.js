class Start extends Phaser.Scene {
    constructor() {
        super("startScene");
    }

    create() {
        //add camera
        this.cameras.main.fadeIn(1000);
        this.add.image(0, 0, 'start-screen').setOrigin(0, 0,);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
      }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.sound.play('selectNoise');
            this.scene.start('playScene');
          }
    }
}