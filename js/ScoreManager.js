class ScoreManager{
    constructor(){
        this.highScore = 0;
    }

    saveHighScore(newScore){
        localStorage.setItem("highScore", newScore.toString());

    }

    loadHighScore(){
        this.highScore = parseInt(localStorage.getItem("highScore") || "0", 10);
        return this.highScore;
    }

    updateHighScore(currentScore){
        this.highScore = this.loadHighScore();

        if (currentScore > this.highScore){
            this.saveHighScore(currentScore);
            console.log("New high score saved: ", currentScore);
        }
    }

    displayHighScore(){
        this.highScore = this.loadHighScore();

        document.getElementById("best-score").textContent = `High Score: ${this.highScore}`;
    }
}