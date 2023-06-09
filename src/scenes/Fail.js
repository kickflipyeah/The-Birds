class Fail extends Phaser.Scene {
    constructor() {
        super("failScene");
    }

    create() {
        //add camera
        this.cameras.main.fadeIn(1000);
        this.add.image(0, 0, 'fail-screen').setOrigin(0, 0,);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.sound.play('endScene', {volume: 0.5, loop: true});
      }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.sound.stopAll();
            this.sound.play('selectNoise');
            this.scene.start('playScene');
          }
        else if (Phaser.Input.Keyboard.JustDown(keyW)) {
            // this.scene.stop('failScene');
            this.sound.stopAll();
            this.sound.play('selectNoise');
            this.scene.start('menuScene');
          }
    }
}