class SoundManager {
    constructor() {
      this.sounds = [
        "assets/game_music.mp3",
        "assets/spell.mp3",
        "assets/shield_hit.mp3",
        "assets/shield_break.mp3",
        "assets/cancel.mp3",
      ];
      this.gameSound = null; // It's not clear what this is for, initializing for clarity
      this.sound = document.createElement("audio");
      this.sound.setAttribute("preload", "auto");
      this.sound.setAttribute("controls", "none");
      this.sound.style.display = "none";
      document.body.appendChild(this.sound);
    }
  
    loadSound(index, loop = false) {
      if (index >= 0 && index < this.sounds.length) {
        this.sound.src = this.sounds[index];
        this.sound.loop = loop;
      } else {
        console.error("Sound index out of bounds");
      }
    }
  
    play() {
      this.sound.play().catch(error => console.error("Error playing sound:", error));
    }
  
    pause() {
      this.sound.pause();
    }
  
    stop() {
      this.sound.pause();
      this.sound.currentTime = 0;
    }

    setVolume(volume) {
        if (volume >= 0 && volume <= 1) {
          this.sound.volume = volume;
        } else {
          console.error("Volume out of range (0-1)");
        }
      }
  }
  