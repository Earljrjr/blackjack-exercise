//let firstName="Troy";
//const API_KEY="eoin24oiunfdoin2oin243oin2";

//if (true){
   // const firstName="Jerry";
    //console.log(firstName);
    //console.log(API_KEY)
    //if (true){
        //let lastName="Patterson";
        //console.log(lastName);
        //console.log(firstName);
    //}
    //console.log(lastName);
//}

//console.log


//let firstName="Mike";
//const API_KEY="eoin24oiumfdoin2oin243oin2";

//if (true){
    //const firstName ="Mike";
   // console.log(firstName);
    //console.log(API_KEY)
    //if(true){
        //let lastName="Rhodes";
        //console.log(lastName);
        //console.log(first)
    //}
//}
//console.log

//const sayName = function(sayName) {
    //console.log("name")
//}



//const sayName = name => {
   // return name;
//}

//const sayNameInlineReturn = name; =>

//console.log(sayName("Troy"));
//console.log(sayNameInlineReturn("Kendra"));


//const sayName = (name = "Troy") => {
    //console.log(name);
//}
//sayName();
//sayName("Jerry");

//const howManyWheels = (color = "black",wheels= 4) => {
    //console.log(color,wheels);
//}

//howManyWheels();
//howManyWheels("red",18);
//howManyWheels(18);


//const adding = (x, y = 3) => x * y;

//for (i=0; i<10; i++) {

    //console.log(adding(6,5));

   // console.log(adding(6));
//}

//let greet = x => console.log(x);
//greet("Hello");

//let age = 5;
//let welcome = (age < 18) ?
//() => console.log('Baby'):
//() => console.log('Adult');
//welcome()

//Arrow Functions 
// Blcok Scoping (let,const)
// Default Parameters

// 3/28/2022
// Template Literals, Template Strings 


// const emptyTemplateLiteral= ``; ( must use backticks `` for Template Literals)

// const poem =`
//Heights by great men reached and kept
//were not obtanined by sudden flight,but
//they,while their companions slept were
//toiling upward in the night.

//`;

//const firstName="Will";
//const lastName = "Smith";

//const fullName = `${firstName}  $ {lastName}`;  // ${}
//console.log(fullName);

//Spread Operator

/*const actors = ["Denzel Washington","Morgan Freeman" ];
const actresses = ["Halle Berry", "Nia Long"];

const hollywood = [...actors, ...actresses];
const reverseHollywood = [...actresses, ...actors];
const seperatedHollywood = [actresses, actors];

//console.log(hollywood);
//console.log(reverseHollywood);
//console.log(seperatedHollywood);*/

// Destructuring//
//const actors = ["Denzel Washington","Morgan Freeman" ];
//const actresses = ["Halle Berry", "Nia Long"];
//const hollywood = [...actors, ...actresses];

//const firstActor = actors [0];
// const [firstActor] = actors;


// // const firstActress = actresses[0];
// const [firstActress] = actresses;
//const [firstPlace,secondPlace, ...everybodyElse] = hollywood;
//console.log(everybodyElse);

/*const teams = ["Duke", "EWHS",]
const city = ["Durham","Goldsboro","Charlotte",]
const stars = [...teams, ...city]
const s = ["Steve Smith","Stephen Curry","Steven A Smmith"]
const value = [" The current value Remaining Value"]

console.log(stars)
console.log(s)
console.log(value)*/


//map method in Js = will modify the array it will do whatever you tell it to do in the function //

/*function arrayMachine(arr1, arr2) {
    let combinedArray  = [...arr1,...arr2];
    let [val1, val2, val3, ...remainingVals] = combinedArray;*/
// Map will iterate over all array values 
// then it will modify the values with what
// you do in the function 
// Finally,it'll return an array with the modified
// values

   /* remainingVals = remainingVals.map((currentVaule) => {
        return `${currentVaule}s`;
    })

    remainingVals.forEach((val) => {
        console.log (`The current value is ${val}`);
    })
}

arrayMachine([1,2,3,4,5,], [6,7,8,9,10]); */

// Template Literals (allows you to use strings or embedded expressions in the form of a string) 
// ** they are enclosed with backticks ``
// examples of Template Literals

//const name = "Mike";
//console.log(`Hello ${name}`); // prints Hello Mike


/*const str1 = `This is a string`;
//const str2 = `This is a string with a 'quote' in it`;
//const str3 = `This is a string with a "double quote" in it`;

console.log(str1)
console.log(str2)
console.log(str3)*/

// Multiline Strings Using Template Literals
//Template literals also make it easy to write multiline strings. For example,
//Using template literals, you can replace

/*const message1 = `This a long message
that spans across multiple lines
in the code`

console.log(message1)*/

//With template literals, it's a bit easier to include variables and expressions inside a string. For that, we use the ${...} syntax.

/*const name = "Jack";
console.log(`Hello ${name}`);
const result = 4 + 5;

// template literals used with expressions 
console.log(`The sum of 4 + 5 is ${result} `);
console.log(`${result <10 ? "Too Low": "Very High"}`)
// prints Hello Jack The sum of 4 + 5 is 9 Too Low */

//An array of string values are passed as the first argument of a tag function. 
//You could also pass the values and expressions as the remaining arguments. For example,

/*const name = 'Jack';
const greet = true;

function tagExample(strings, nameValue) {
    let str0 = strings[0]; // Hello
    let str1 = strings[1]; // , How are you?

    if(greet) {
        return `${str0}${nameValue}${str1}`;
    }
}

// creating tagged literal
// passing argument name
const result = tagExample`Hello ${name}, How are you?`;

console.log(result);*/

// The spread opeerator ... is used to expand or spread an interable or an array 
// You can also use the spread syntax ... to copy the items into a single array.

/*const arr1 = ['one', 'two'];
const arr2 = [...arr1, 'three', 'four', 'five'];

console.log(arr2); 
//  Output:
//  ["one", "two", "three", "four", "five"]*/

/*When the spread operator is used as a parameter, it is known as the rest parameter.

You can also accept multiple arguments in a function call using the rest parameter. For example,

let func = function(...args) {
    console.log(args);
}

func(3); // [3]
func(4, 5, 6); // [4, 5, 6] */

//let x = 5, y = 6, z =7
//console.log (y)

//Backticks are generally used when you need to include variables or expressions into a string. 
//This is done by wrapping variables or expressions with ${variable or expression} as shown above.

/*const name = 'ram';
const name1 = "har1";
const result = `The names are ${name} and ${name1}`;
console.log(result) //prints out The names are ram har1*/

// Javascript Class Inheritence

/*const rankings = {
    first: "Jimmy",
    second: "Sandy"
};

rankings.first = "Billy"

//console.log(rankings.first);

function Car (paint) {
    this.running = false; // object construction function (this is what being return) constructing a new object with the blue print
    this.color = paint;

    this.startEngine = function() {
        this.running = true; /* prints Car {
            running: false,
            color: undefined,
            startEngine: [Function (anonymous)]
          }
          Car {
            running: false,
            color: undefined,
            startEngine: [Function (anonymous)]
          } */
    //}
//}

//const ferrari =  new Car('Red');
//const lambo = new Car ('yellow');

//ferrari.startEngine();

//console.log(ferrari)
//console.log(lambo)

//console.log(ferrari);

class Car {
    constructor(paint ="paint") {
        this.running = false;
        this.color = paint;
    }


startEngine () {
    this.running = true;
}
}

class Tesla extends Car {
    constructor() { // constructor is apart of the ES6 must have it in the class q
        super(); // constructing all of the data from the parent which is Car
// its inhereting the method 
        this.isElectric = true;
}
startEngine() {
    this.running = " i don't want no engine..."
}
stopEngine() {
    this.running = false;
}
}
const ride = new Tesla ();
ride.startEngine ();
console.log(ride)
ride.stopEngine();
console.log(ride);
//const ferrari = new Car ("red");
//ferrari.startEngine();
//console.log(ferrari)

