class Player {
  constructor(demon, score, sound, game) {
    this.charArray = [];
    this.text = "";
    this.shield = {
      value: 3,
      x: canvas.width,
      y: canvas.height * 4.5,
    };
    this.demon = demon;
    this.game = game;
    this.score = score;
    this.sound = sound;
  }

  cancelSpell() {
    if (
      this.text.toLowerCase() === this.demon.currentSpell.text.toLowerCase()
    ) {
      game.ui.text.innerText = game.ui.dialog[2];
      this.sound.loadSound(4);
      this.sound.play();
      this.charArray.length = 0;
      this.demon.reset();
      this.score++;
      this.game.updateScoreUI();
      console.log(this.demon.currentSpell.position.x, this.score);
    }
  }

  drawShield(ctx) {
    if (this.shield.value > 0) {
      ctx.beginPath();
      ctx.moveTo(this.shield.x, 0);
      ctx.lineTo(this.shield.x, this.shield.y);
      ctx.strokeStyle = "white";
      ctx.lineWidth = this.shield.value * 2;
      ctx.stroke();
    }
  }

  breakShield() {
    if (
      this.demon.currentSpell.position.x < this.shield.x &&
      this.shield.value > 0
    ) {
      game.ui.text.innerText = game.ui.dialog[3];
      this.sound.loadSound(2);
      this.sound.play();
      this.demon.reset();
      this.shield.value--;
      this.game.speed++;
      this.game.updateShieldUI(this.shield.value);
    }
    if(this.shield.value === 0){
      game.ui.text.innerText = game.ui.dialog[4];
      this.sound.loadSound(3);
      this.sound.play();
    }
  }
}
