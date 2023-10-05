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
        let shuffledResult = shuffleArray(defaultAttributeScores);
        for (const [key, value] of Object.entries(this.attributes)){
            let attributeValue = shuffledResult.pop();
            this.attributes[key] = attributeValue;
        }

    }

    rollAttribute() {
        console.log("Rolling Dice...");
    }

    printPlayer() {
        console.log(this.name);
        console.log(this.attributes)
    }

} 

function diceRoller(times,sides) {
    let results = []
    for (let i = 0; i < times; i++){
        results.push(Math.floor(Math.random() * sides + 1));
    }
    return results;
}

function sumArrayElements(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    return sum;
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