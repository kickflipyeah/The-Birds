class Rock extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        //this.rockSound = scene.sound.add('rockSound');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setAllowGravity(false);
        this.movementSpeed = 2;
        this.cursors = scene.input.keyboard.createCursorKeys();
    }
    update() {
        // if(!isFiring) {
        //     this.x = this.protag.x;
        //     this.y = this.protag.y;
        //     if (this.cursors.down.isDown) {
        //         isFiring = true;
        //         // this.sound.play();  play effect sound
        //     }
        //     // this.x = Phaser.Math.Clamp(this.x, borderUISize + borderPadding,
        //     //     game.config.width - borderUISize - borderPadding);
        // }

        if(isFiring && this.y >= 0) {
            this.y -= this.movementSpeed;
         }
        if(this.y <= 0) {
            this.reset();
        }
    }
    reset() {
        isFiring = false;
    }
}