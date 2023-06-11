class Birds extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //add to existing scene
        scene.physics.add.existing(this); //add physics

        //make birds fly by screen, shooting out smaller bird claws to attack the boy
        //this.body.setAllowGravity(false);
        this.body.setVelocityX(-100); //can make a bird speed variable

        // this.anims.create({
        //     key: 'fly',
        //     frameRate: 8,
        //     frames: this.anims.generateFrameNumbers('birds', { start: 0, end: 1 }),
        //     repeat: -1
        // });
    }
    update() {
        //destroy birds if they go off screen
        if (this.x < -20) {
            this.destroy();
        }
    }
}