class Game {
  constructor() {
    this.isGameOver = true;

    this.score = 0;
    this.currentScore = 0;
    this.highScore = new ScoreManager();

    this.speed = 4;
    this.sound = new SoundManager();

    this.demon = new Demon(this.sound, this);
    this.player = new Player(this.demon, this.score, this.sound, this);

    this.uiScore = document.getElementById("score");

    this.ui = {
      score: document.getElementById("score"),
      shield: document.getElementById("shield"),
      wizard: document.getElementById("wizard"),
      menu: {
        panel: document.getElementById("menu"),
        start: document.getElementById("start"),
        diff: document.getElementById("diff"),
      },
      text: document.getElementById("game-text"),
      dialog: [
        "A demon appeared",
        "Demon is throwing spell!",
        "You cancelled the spell",
        "The shield is breaking",
        "The shield broke",
        "You died"
      ]
    };

    this.ui.menu.diff.addEventListener("change", (e) => {
      this.speed = e.target.value;
    });

    this.musique = new SoundManager();

    this.animationFrameId = requestAnimationFrame(animate);
  }

  updateShieldUI(shield) {
    this.ui.shield.innerText = `Shield: ${shield}`;
  }

  updateScoreUI() {
    this.ui.score.innerText = `Cancelled Spell: ${this.player.score}`;
  }

  startGame() {
    this.ui.text.innerText = this.ui.dialog[1];
    this.isGameOver = false;
    this.musique.loadSound(0);
    this.musique.setVolume(0.5);
    this.musique.play();
    this.ui.menu.panel.style.display = "none";
    this.ui.wizard.style.opacity = 1;
    this.player.charArray.length = 0;
    this.score = 0;
    this.player.shield.value = 3;
    this.updateShieldUI(this.player.shield.value);
    console.log(this.speed);
    animate();
  }

  gameOver() {
    this.ui.text.innerText = this.ui.dialog[5];
    this.musique.stop();
    this.ui.wizard.style.opacity = 0;
    this.player.charArray.length = 0;

    this.isGameOver = true;
    cancelAnimationFrame(this.animationFrameId);

    this.currentScore = this.score;
    console.log(this.currentScore);
    this.score = 0;
    this.speed = 4;
    this.updateScoreUI();
    this.highScore.updateHighScore(this.currentScore);
    this.highScore.displayHighScore();

    this.ui.menu.panel.style.display = "flex";
  }
}
