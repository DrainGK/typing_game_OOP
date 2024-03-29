function adjustCanvasForHighDPI(canvas) {
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
  
    const rect = canvas.getBoundingClientRect();
  
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
  
    ctx.scale(dpr, dpr);
  
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
}
  
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    adjustCanvasForHighDPI(canvas);
    animate();
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Backspace") {
      e.preventDefault();
      player.charArray.pop();
    } else if (e.key.length === 1) {
      lastKeyPressed = e.key;
      player.charArray.push(lastKeyPressed);
    }
});