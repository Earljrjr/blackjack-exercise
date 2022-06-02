// Es6 Homework 10/29
// Classes

/*class Pizza {
    constructor(flavor){
        this.flavor = flavor;
    }
}

const pizza1 = new Pizza ("Cheese");
console.log(pizza1.flavor)

class Chicken {
    constructor(daily){
        this.daily = daily;
    }
}

const chicken1 = new Chicken ("Grilled or BBQ");
console.log(chicken1.daily)*/  // prints Cheese and Grilled or BBQ

// Class Methods 

/*class Person {
    constructor(name) {
    this.name = name;
  }
// defining method
greet() {
    console.log(`Hello ${this.name}`);
}
}

let person1 = new Person('John');

// accessing property
console.log(person1.name); // John

// accessing method
person1.greet(); // Hello John */

/*class Team {
    constructor(name, city){
        this.name = name;
        this.city = city;
    }


greet () {
    console.log(`Hello ${this.name}`);
}
}

let team1 = new Team ("Duke");
let team2 = new Team ("Durham");
console.log(team1.name); //output Duke
team1.greet(); // out Hello Duke
team2.greet();// Hello Durham */

// class Inhertance
/*  class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

}

let student1 = new Student('Jack');
student1.greet(); // output Hello Jack*/

/*class Friend {
    constructor (name) {
        this.name = name;
    }


greet (){
    console.log (`Hello ${this.name}`);
}
}
class Person extends Friend {

}

let person1 = new Person ("Jamar");
person1.greet(); */

/*class Teacher {       not working
    constructor(name){
        this.name;
    }

greet () {
    console.log (`Whats up ${this.name}`);
}
}
class Instructor extends Teacher{

}
let instructor1 = new Instructor ("Troy");
instructor1.greet(); // Whats up Troy */

// super keyword 
// Is used to call the constructor of its parent class to access the parent's properties and methods.
// By calling the super() method in the constructor method, 
//we call the parent's constructor method and gets access to the parent's properties and methods


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

/*class myStory {
    constructor(name,city){
        this.name = name;
        this.city = city;
    }

mom () {
    return `${this.name} is Pearlniece!`;
}

dad () {
    return `${this.name} is Thomas`;
}

brother () {
    return `${this.name} is Jr`;
}

uncleToBe () {
    return `${this.name} It's Me !!!!!`;
}

class Family extends myStory {
    constructor (name,city){
    super (name,city);
    }
}

// hero should a list of friends use an array conditional work flow methods */