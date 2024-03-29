class Player {
  constructor() {
    this.charArray = [];
    this.text = "";
    this.demon = new Demon();
  }

  cancelSpell() {
    if (
      this.text.toLowerCase() === this.demon.currentSpell.text.toLowerCase()
    ) {
      this.demon.currentSpell.position.x = window.innerWidth * 0.5;
      console.log(this.demon.currentSpell.position.x);
      animate();
    }
  }
}
