class Rock extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        //this.rockSound = scene.sound.add('rockSound');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setAllowGravity(false);
        this.movementSpeed = 2;
        this.cursors = scene.input.keyboard.createCursorKeys();
        
        this.anims.create({
            key: 'shift',
            frameRate: 4,
            frames: this.anims.generateFrameNumbers('Rock', { start: 0, end: 1 }),
            repeat: -1
        });
    }
    update() {
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