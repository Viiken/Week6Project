class Character {
    constructor(name, race, force){
        this.name = name;
        this.race = race;
        this.force = force;
    }

    describe(){
        return `${this.name} is a ${this.force} ${this.race}`;
    }
}

//--------------------------------------------------------------------//

class Army {
    constructor(general) {
        this.general = general;
        this.characters = [];
    }

    addCharacter(Character){
        if (character instanceof Character) {
            this.characters.push(character);
        } 
        else {
            throw new Error(`You can only add an instance of Character. 
            argument is not a character: ${character}`);
        }
    }

    describe() {
        return `${this.general} has ${this.chracter.length} followers.`;
    }
}

//--------------------------------------------------------------------//

class Menu {
    constructor() {
    this.armys = [];
    this.selectedArmy = null;
    }

   start() {
    let selection = this.showMainMenuOptions(); 
    while (selection != 0) {
        switch(selection) {
        case '1' :
        this.createArmy();
        break;
        case '2' :
        this.viewArmy();
        break;
        case '3' :
        this.deleteArmy();
        break;
        case '4' :
        this.displayArmys();
        break;
        default:
        selection = 0;
        }
        selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
    }

//--------------------------------------------------------------------//

    showMainMenuOptions() {
        return prompt (`
        0) exit
        1) create a new army
        2) view an army
        3) delete an army
        4) display all armys
        `);
    }

//--------------------------------------------------------------------// 

    showArmyMenuOptions(ArmyInfo) {
        return prompt (`
        0) back
        1) add a new character
        2) delete a character
        -----------------
        ${armyInfo}
        `);
    }

//--------------------------------------------------------------------//

    displayArmys() {
    let armyString = '';
    for (let i = 0; i < this.armys.length; i++) {
        armyString += i+ ') ' + this.army[i].general + '\n';
    }
    alert(armyString);
    }

//--------------------------------------------------------------------//

    createArmy() {
        let general = prompt('Enter name for new General: ');
        this.armys.push(new Army(general));
    }

//--------------------------------------------------------------------//

    viewArmy() {
        let index = prompt("Enter the index of the army that you want to view:");
        if (index > -1 && index < this.armys.length) {
            this.selectedArmy = this.army[index];
            let description = 'People Following ' + this.selectedArmy.general + '\n';
            description += ' ' + this.selectedArmy.describe() + '\n ';
            for (let i = 0; i < this.selectedArmy.characters.length; i++) {
                description += i + ') ' + this.selectedArmy.characters[i].describe() + '\n';
        }
        let selection1 = this.showArmyMenuOptions(description);
        switch (selection1) {
            case '1' :
            this.createArmy();
            break;
            case '2' :
            this.deleteArmy();
            }
        }
    }

//--------------------------------------------------------------------//

    deleteArmy() {
        let index = prompt('Enter the index of the army that has lost: ');
        if (index > -1 && index < this.armys.length) {
            this.armys.splice(index,1);
        }
    }

//--------------------------------------------------------------------//

    createCharacter() {
        let name = prompt('Enter name for character: ');
        let race = prompt('Enter race for character');
        let force = prompt('Enter sith/jedi for character: ');
        //this.selectedArmy.character.push(new Character(name, race, force));
        this.selectedTeam.addCharacter(new Character(name, race, force ));
    }

//--------------------------------------------------------------------//

    deleteCharacter() {
        let index = prompt('Enter the index of the character who was defeated: ');
        if (index > -1 && index < this.selectedArmy.characters.length) { 
            this.selectedArmy.characters.splice(index,1);
        }
    }
}

//--------------------------------------------------------------------//

    let menu = new Menu();
    menu.start();