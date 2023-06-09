/*
 *  Jessica Zogaric
 *  The Birds
 *  Approximate time to complete: 
 *  
 */
let config = {
    type: Phaser.AUTO,
    antialias: false,
    width: 320,
    height: 240,
    scene: [ Load, Menu, Play ], 
    render: {
      pixelArt: true
    },
    physics: {
      default: 'arcade',
      arcade: {
          //debug: true,
          gravity: {
              x: 0,
              y: 100
          }
      }
    },
    zoom: 2
  }

let keyUP, keyENTER;
let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;
//let isJumping = false;