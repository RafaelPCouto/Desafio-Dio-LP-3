class hero {
    constructor(heroName, heroAge, heroType) {
        this.heroName = heroName.toUpperCase();
        this.heroAge = heroAge;
        this.heroType = heroType.toUpperCase();
    }

    //Função de uso interno para identificar arma do herói
    #getWeapon() {

        switch (this.heroType) {
            case "MAGE":
                return "magic";
            case "WARRIOR":
                return "sword";
            case "MONK":
                return "martial arts";
            default:
                return "shuriken";
        }

    }

    // Métdo de ataque customizado pelo tipo do herói

    attack() {

        let weapon = this.#getWeapon();
        console.log(`${this.heroName}, the ${this.heroType}, has just attacked with ${weapon}!`);

    };

    // Método para saudação - customizada pelo nome do herói

    greetings() {

        console.log(`${this.heroName} says: Greetings, my friend! My name is ${this.heroName}. I'm a ${this.heroType} and I was born ${this.heroAge} years ago!`);

    };

    // Método para ameaça - Customizada pelo tipo do herói

    threat() {
        let weapon = this.#getWeapon();
        console.log(`${this.heroName} says: Don't mess with me, or u'll face my ${weapon}!`);

    }
}

// Heróis criados para testes

let hero1 = new hero("Gandalf", 2000, "mage");

hero1.greetings();
hero1.threat();
hero1.attack();

let hero2 = new hero("Aragorn", 87, "warrior");

hero2.greetings();
hero2.threat();
hero2.attack();

let hero3 = new hero("Bruce Lee", 21, "monk");

hero3.greetings();
hero3.threat();
hero3.attack();

let hero4 = new hero("Hatake Kakashi", 26, "ninja");

hero4.greetings();
hero4.threat();
hero4.attack();