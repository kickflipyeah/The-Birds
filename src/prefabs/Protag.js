class Protag extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
    
        //add protagonist to the scene w/phys and gravity
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setSize(10, 24, true);
        this.body.gravity.y = 330;
        this.body.maxVelocity.x = 330;

        //cursor keys
        this.cursors = scene.input.keyboard.createCursorKeys();
        //add animations for walking
        this.anims.create({
            key: 'walkL',
            frameRate: 8,
            frames: this.anims.generateFrameNumbers('protag', { start: 9, end: 14 }),
            repeat: -1
        });
        this.anims.create({
            key: 'walkR',
            frameRate: 8,
            frames: this.anims.generateFrameNumbers('protag', { start: 3, end: 8 }),
            repeat: -1
        });
        this.anims.create({
            key: 'idle',
            frameRate: 4,
            frames: this.anims.generateFrameNumbers('protag', { start: 0, end: 2 }),
            repeat: -1
        });
    }
    update() {
        this.direction = new Phaser.Math.Vector2(0);
        if (!isJumping) {
            if (this.cursors.up.isDown) {
                //this.anims.play('idle', true);
                this.body.setVelocityY(-200);
                this.scene.sound.play('jumpNoise');
                isJumping = true;
            }
            else if(this.cursors.left.isDown && isJumping){
                this.anims.play('walkL', true);
                this.body.setVelocityX(-50);
            }
            else if(this.cursors.right.isDown && isJumping){
                this.anims.play('walkR', true);
                this.body.setVelocityX(50);
            }
        }
        if (this.cursors.left.isDown) {
            this.anims.play('walkL', true);
            this.body.setVelocityX(-50);
        } else if (this.cursors.right.isDown) {
            this.anims.play('walkR', true);
            this.body.setVelocityX(50);
        }
        else {
            this.anims.play('walkR', true);
            this.body.setVelocityX(0);
        }
    }
}
