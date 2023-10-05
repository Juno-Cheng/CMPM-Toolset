const defaultAttributeScores = [15,14,13,12,10,8];

class Player{
    constructor(characterNane = "Naruto"){//Values cannot be set if not in parameter similar to python __init__
        this.name = characterNane;
        this.attributes = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        };
        
    }

    rollAttribute() {
        console.log("Rolling Dice...");
    }

    printPlayer() {
        console.log(this.name);
        console.log(this.attributes)
    }

}


function shuffleArray(targetArray){
    let shuffled = Array.from(targetArray); //Makes a copy so it doesn't change original
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    return shuffled;
}

const player01 = new Player();
player01.printPlayer();

const player02 = new Player('Son Goku');
player02.rollAttribute();
player02.printPlayer();