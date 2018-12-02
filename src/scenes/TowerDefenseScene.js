import Phaser from 'phaser';

class TowerDefenseScene extends Phaser.Scene {
  constructor() {
    super({ key: 'TowerDefenseScene' });
  }

  create() {
    this.speed = Phaser.Math.GetSpeed(20, 1);

    this.star = this.add.star(200, 200, 4, 10, 20, 0x6666ff);
  }

  update(time, delta) {
    this.time = time;
    this.delta = delta;

    this.star.setPosition(
      this.star.x + this.speed * delta,
      this.star.y,
    );
  }
}

export default TowerDefenseScene;
