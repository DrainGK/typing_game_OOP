class Demon {
  constructor(sound, game) {
    this.randomY = 0.1 + Math.random() * 0.8;
    this.spells = [
      "void Blitz",
      "fire",
      "flame",
      "supernova",
      "blast",
      "Chaos",
      "Burst",
      "Sunfire",
      "Possession",
      "Abomination",
      "Destruction",
      "Rage",
      "Doom",
      "Darkness",
      "Hellfire",
      "Obliteration",
      "Hallucination"
    ];
    this.currentSpell = {
      text: this.randomSpell(),
      position: {
        x: window.innerWidth * 0.75,
        y: window.innerHeight * 0.75 * this.randomY,
      },
    };
    this.sound = sound;
    this.game = game;
  }

  randomSpell() {
    const randomIndex = Math.floor(Math.random() * this.spells.length);
    return this.spells[randomIndex];
  }

  reset() {
      game.ui.text.innerText = game.ui.dialog[1];
      this.game.player.charArray.length = 0;
      this.currentSpell.position.x = window.innerWidth * 0.75;
      this.randomY = 0.1 + Math.random() * 0.8; // Update randomY for new random position
      this.currentSpell.position.y = window.innerHeight * 0.75 * this.randomY; // Update y position
      this.currentSpell.text = this.randomSpell();
  }
}
