import Phaser from 'phaser';
import TowerDefenseScene from './scenes/TowerDefenseScene';

const gameConfig = {
  width: 1024,
  height: 768,
  scene: TowerDefenseScene,
  disableContextMenu: true,
};

function createGame() {
  return new Phaser.Game(gameConfig);
}

createGame();
