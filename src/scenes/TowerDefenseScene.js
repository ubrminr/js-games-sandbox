import Phaser from 'phaser';

class TowerDefenseScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TowerDefenseScene' });
  }

  create() {
    const rect = this.add.rectangle(200, 200, 148, 148, 0x6666ff);
    rect.setStrokeStyle(2, 0xff0000);
  }

  update(time, delta) {
    this.time = time;
    this.delta = delta;
  }
}

export default TowerDefenseScene;
