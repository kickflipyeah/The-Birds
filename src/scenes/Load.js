class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }
    preload() {
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                             // reset fill/line style
            loadingBar.fillStyle(0xa6e1e3, 1);              // (color, alpha)
            loadingBar.fillRect(0, centerY, w * value, 5);  // (x, y, w, h) 
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });
        //path    
        this.load.path = './assets/';
        //load audio
        this.load.audio('blipSelect', 'audio/blipSelect.wav');
        this.load.audio('jump', 'audio/jumpsound.wav');
        //load img
        this.load.image('title-screen', 'img/title-screen.png');
        this.load.image('Bushes', 'img/Bushes.png');
        this.load.image('Ground', 'img/Ground.png');
        this.load.image('Sky', 'img/Sky.png');  
        this.load.image('Clouds', 'img/Clouds.png');
        //load spritesheet
        this.load.spritesheet('protag', 'img/protag.png', {frameWidth: 24, frameHeight: 30, startFrame: 0, endFrame: 14});
        this.load.spritesheet('Birds', 'img/Birds.png', {frameWidth: 50, frameHeight: 28, startFrame: 0, endFrame: 1});
    }
    
    create() {
        // check for local storage browser support
        if(window.localStorage) {
            console.log('Local storage supported');
        } else {
            console.log('Local storage not supported');
        }

        // go to Title scene
        this.scene.start('menuScene');
    }
}