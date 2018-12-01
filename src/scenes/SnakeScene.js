import Phaser from 'phaser';

class SnakeScene extends Phaser.Scene {
  constructor() {
    super({ key: 'SnakeScene' });
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

export default SnakeScene;
