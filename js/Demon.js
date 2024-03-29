class Demon{
    constructor(){

        this.spells =  ["zizi","zaza","zozo"];
        this.currentSpell = {
            text:  this.randomSpell(),
            position: {
                x: window.innerWidth * 0.75,
                y: (window.innerHeight * 0.75)*(0.1 + Math.random() * 0.8)
            }
        }
    }

    randomSpell(){
        const randomIndex = Math.floor(Math.random() * this.spells.length);
        return  this.spells[randomIndex];
    }
}