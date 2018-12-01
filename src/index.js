import Phaser from 'phaser';
import SimpleScene from './scenes/SimpleScene';

const gameConfig = {
  width: 680,
  height: 400,
  scene: SimpleScene,
};

function createGame() {
  return new Phaser.Game(gameConfig);
}

createGame();
