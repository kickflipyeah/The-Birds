class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
        this.VEL = 100;
    }
    create() {
        //add camera
        this.cameras.main.fadeIn(1000);
        //play suspensful music 
        this.sound.play('actionTrack', {volume: 0.5, loop: true});
        //add backgrounds
        this.add.image(0, 0, 'Sky').setOrigin(0, 0,); //add background sky
        this.clouds = this.add.tileSprite(0, -49, 512, 256, 'Clouds').setOrigin(0, 0); //add clouds
        this.ground = this.add.tileSprite(0, 187, 512, 64, 'Ground').setOrigin(0, 0); //add ground
        this.bushes = this.add.tileSprite(0, 212, 512, 32, 'Bushes').setOrigin(0, 0); //add bushes
        this.add.image(0, 0, 'border').setOrigin(0, 0,); //add foreground   
        //add collider to floor
        this.floor = this.physics.add.image(0, 193).setOrigin(0, 0);
        this.floor.displayHeight = 32;
        this.floor.displayWidth = 320;
        this.floor.body.setAllowGravity(false);
        this.floor.setImmovable(true);
        //add rock weapon
        this.rock = new Rock(this, 42, 177, 'Rock').setOrigin(0.0, 0); 
        this.rock.play('shift');      
        //add protagonist sprite
        this.protag = new Protag(this, 32, 170, 'protag').setOrigin(0, 0);
        this.protag.play('walkR');
        this.protag.body.setCollideWorldBounds(true);
        //add player input to scene
        this.cursors = this.input.keyboard.createCursorKeys();
        //make sprite collide with floor
        this.physics.add.collider(this.protag, this.floor, null, function(){
            isJumping = false;
        });

        //add bird
        birdAlive = true; //added in to check if bird is alive
        this.birds = new Birds(this, game.config.width/1.1, game.config.height/9, 'Birds');
        this.birds.play('fly');
        this.birdHealth = 5;
        this.protag.body.setCollideWorldBounds(true);

        this.scoreConfig = {
            fontFamily: 'Helvetica',
            fontSize: '20px',
            backgroundColor: '#6a9469',
            color: '#cef5ee',
            align: 'center',
            padding: {
                top: 3,
                bottom: 3,
            },
            fixedWidth: 100 
        };

        this.physics.add.collider(this.birds, this.protag, () => {
            this.birds.y -= 60;
            this.cameras.main.shake(100, 0.009);
            this.protag.setAlpha(0.5);
            this.rock.setAlpha(0.2);
            playerHealth -= 1;
            this.time.delayedCall(800, () => {
                this.protag.setAlpha(1);
                this.rock.setAlpha(1);
            });
            if (this.birds.body.touching.left == true){
                this.birds.x += 60;
            }
            else if (this.birds.body.touching.right == true){
                this.birds.x -= 60;
            }
        });

         this.physics.add.collider(this.rock, this.birds, () => {
            this.birds.y -= 60;
            this.birds.setAlpha(0.5);
            birdAlpha = true;
            this.birdHealth -= 1;
            this.birds.hp -= 1;
            console.log('bird hp', this.birds.hp);
            console.log('bird hit');
            this.time.delayedCall(300, () => {
                this.birds.setAlpha(1);
                birdAlpha = false; 
            });
            this.rock.reset();
        }); 
    }
    update(){
        // health UI
        this.scoreText = this.add.text(0, 0, 'Health: ' + playerHealth, this.scoreConfig);
        if (playerHealth <= 0) {
            this.sound.stopAll();
            this.physics.pause();
            console.log("player dead");

            //move to fail screen
            // this.scene.stop("playScene");
            this.scene.start('failScene');

            //reset health
            playerHealth = 3;
        }
        // check bird health
        //if (this.birdHealth <= 0 && birdAlive == true){
        if (this.birds.hp <= 0 && this.birds.isAlive == true){
            this.birds.destroy();
            console.log("bird dead");
            birdAlive = false;
            this.birds.isAlive = false;
            this.physics.pause();
            this.gameOver = true;
        }
        else if(this.birds.hp > 0 && this.birds.isAlive == true) {
            this.birds.update();
        }
        //make backgrounds scroll
        this.protag.update(); //add end screen for death
        this.rock.update();

        this.clouds.tilePositionX += 0.3;
        this.ground.tilePositionX += 0.6;
        this.bushes.tilePositionX += 1.2;

        //variable for player position
        playerPosX = this.protag.x;
        playerPosY = this.protag.y;

        if(!isFiring) {
            this.rock.x = playerPosX + 10;
            this.rock.y = playerPosY + 11;
            if (this.cursors.down.isDown) {
                isFiring = true;
            }
        }
        //reset rock
        if(this.rock.y <= 0) {
            this.rock.reset();
            this.rock.x = this.protag.x + 10;
            this.rock.y = this.protag.y + 11;
        }

        if (this.gameOver == true && this.birds.hp <= 0){
            this.sound.stopAll();
            this.physics.pause();
            this.scene.stop("playScene");
            this.scene.start('finalScene');
        } 

    }

}
