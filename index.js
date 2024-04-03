const game = new Game();
const player = game.player;
const demon = game.demon;
game.ui.menu.start.addEventListener("click", game.startGame.bind(game));


function animate() {
  if (game.isGameOver) {
    return;
  }
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const baseFontSize = Math.min(canvas.height / 20, 48);
  ctx.font = `${baseFontSize}px sans-serif`;
  player.text = player.charArray.join("");
  ctx.fillStyle = "white";
  if (player.text !== undefined) ctx.fillText(player.text, 10, 50);

  ctx.fillText(
    demon.currentSpell.text,
    demon.currentSpell.position.x,
    demon.currentSpell.position.y
  );

  player.drawShield(ctx);

  demon.currentSpell.position.x -= game.speed;
  if (demon.currentSpell.position.x <= 0) {
    demon.reset();
    game.gameOver();
  }
  player.breakShield();
  player.cancelSpell();

  if (game.animationFrameId !== null) {
    cancelAnimationFrame(game.animationFrameId);
  }
  game.animationFrameId = requestAnimationFrame(animate);
}
