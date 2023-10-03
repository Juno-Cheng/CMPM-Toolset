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

    rollAttribute(){
        console.log("Rolling Dice...");
    }

    printPlayer(){
        console.log(this.name);
        console.log(this.attributes)
    }

}


