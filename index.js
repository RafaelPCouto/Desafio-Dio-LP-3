class Hero {
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

    // Método para ataque customizado

    attack() {

        const weapon = this.#getWeapon();
        console.log(`${this.heroName}, the ${this.heroType}, has just attacked with ${weapon}!\n`);

    };

    // Método para saudação customizada

    greetings() {

        console.log(`${this.heroName} says: Greetings, my friend! My name is ${this.heroName}. I'm a ${this.heroType} and I was born ${this.heroAge} years ago!\n`);

    };

    // Método para ameaça customizada

    threat() {
        const weapon = this.#getWeapon();
        console.log(`${this.heroName} says: Don't mess with me, or u'll face my ${weapon}!\n`);

    }
}

// Heróis criados para testes

const hero1 = new Hero("Gandalf", 2000, "mage");

hero1.greetings();
hero1.threat();
hero1.attack();

const hero2 = new Hero("Aragorn", 87, "warrior");

hero2.greetings();
hero2.threat();
hero2.attack();

const hero3 = new Hero("Bruce Lee", 21, "monk");

hero3.greetings();
hero3.threat();
hero3.attack();

const hero4 = new Hero("Hatake Kakashi", 26, "ninja");

hero4.greetings();
hero4.threat();
hero4.attack();