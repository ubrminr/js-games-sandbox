import { log } from './logger';
import 'phaser';
import { SimpleScene } from './scenes/SimpleScene';

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene
};

new Phaser.Game(gameConfig);

log('phaser stuff has bee loaded');