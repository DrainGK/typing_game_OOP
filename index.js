const player = new Player();
const demon = player.demon;
const speed = 4;

function animate() {
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

  demon.currentSpell.position.x -= speed;
  player.cancelSpell();

  window.requestAnimationFrame(animate);
}
console.log(demon.currentSpell.position.x);
