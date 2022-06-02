
/* class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat() {
        return `${this.name} is eating!`;
    }

    sleep() {
        return `${this.name} is going to sleep!`;
    }

    wakeUp() {
        return `${this.name} is waking up!`;
    }

}

class Gorilla extends Animal {
    constructor(name, weight) {
        super(name, weight);
    }

    climbTrees() {
        return `${this.name} is climbing trees!`;
    }

    poundChest() {
        return `${this.name} is pounding its chest!`;
    }

    showVigour() {
        return `${super.eat()} ${this.poundChest()}`;
    }

    dailyRoutine() {
        return `${super.wakeUp()} ${this.poundChest()} ${super.eat()} ${super.sleep()}`;
    }

}

function display(content) {
    console.log(content);
}

const gorilla = new Gorilla('George', '160Kg');
display(gorilla.poundChest());
display(gorilla.sleep());
display(gorilla.showVigour());
display(gorilla.dailyRoutine());

// OUTPUT:
// George is pounding its chest!
// George is going to sleep!
// George is eating! George is pounding its chest!
// George is waking up! George is pounding its chest! George is eating! George is going to sleep! */

/*class Heros {
    constructor (name,alias,location,nemesis,friends,powerlevel,powers) {
        this.name = name;
        this.alias = alias;
        this.location = location;
        this.nemesis = nemesis;
        this.friends = friends;
        this.powerlevel = powerlevel;
        this.powers = powers;
    }


callUpon (){
    return `${this.name} is Bruce Wayne, Peter Parker, Steve Rogers, Bruce Banner`;
}

alterEgo () {
    return `${this.alias} is Batman, Spider Man, Captain America,Hulk`;
}

home () {
    return `${this.location} is Gotham,  Queens NY, Manhattan NY, Dayton Ohio`;
}

enemy () {
    return `${this.nemesis} is Bane, The Green Goblin, Red Skull,The Leader`;
}

homies () {
    return `${this.friends} is Alfred, Harry Osborn, Bucky Barnes, Rick Jones`;
}

life () {
    return ` ${this.powerlevel} is fully powered at 100%`;
}

weapons () {
    return `${this.powers} hand to  hand combantant, spider sense alert, strength, becomes more powerful than any human`
}
}

const heros1 = new Heros ("Bruce Wayne","Peter Parker","Steve Rogers", "Bruce Banner")

// js access and methods  conditonals  logical and  operator .push df*/

/*class Hero {
    constructor (realName,alias,location,nemesis) {
        this. realName = realName;
        this.alias = alias;
        this.location = location;
        this.nemesis  = nemesis;
        this.friends = [];
        this.powerLevel= 100;
        this.isAlive = true;
        this.power = {
            jump : 5,
            fly: 10,
            punch: 5,
            kick : 5
        };
    }

    usePower(power) {
        const powerLevelAfterUsingPower = this.powerLevel - this.powers[power]
        if ( powerLevelAfterUsingPower < 0) {
            console.log )()
        }
    } */

    class Sports {
        constructor(player,team,location,friends){
            this.player = player
            this. team = team
            this.location = location
            this.friends = friends
            this. pointLevel = 60
            this.score = {name:"Curry", 
                        levelScore: 62}
        
    }
    usePoint() {
        if (this.pointLevel < this.score.levelScore){
            console.log ("winner")
        }
        else {let newLevel = this.pointLevel - this.score .levelScore
            console.log (newLevel)
        }
    }
    }
    class Football extends Sports {
        constructor () {
        super ("Steve Smith", "Panthers", "NC", "Jake Delhomme");
        this.field = "Bank Of America" 
        this. city = "CLT"
    }
}
    const basketball = new Sports ("Allen Iverson","Sixers","Philly","Kobe")
    console.log(basketball)

    const x = new Football("Steve Smith", "Panthers", "Nc", "Jake Delhomme")
    console.log(x)