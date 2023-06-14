class Fail extends Phaser.Scene {
    constructor() {
        super("failScene");
    }

    create() {
        //add camera
        this.cameras.main.fadeIn(1000);
        // this.add.image(0, 0, 'title-screen').setOrigin(0, 0,);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            this.sound.play('selectNoise');
            this.scene.start('playScene');
          }
        else if (Phaser.Input.Keyboard.JustDown(keyW)) {
            this.sound.play('selectNoise');
            this.scene.start('menuScene');
          }
    }
}