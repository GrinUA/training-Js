const Doctor = require('./Doctor.js');
const Solider = require('./Solider.js');
const Heavy = require('./Heavy.js');
const Battle = require('./Battle.js');

console.log("Dark Side: ");
let darkSide = [new Doctor("Dark Doc"), new Solider("Dark Solider 1"), new Solider("Dark Solider 2"), new Heavy("Dark heavy1"), new Heavy("Dark heavy2"), new Heavy("Dark heavy3"),];
//console.log(darkSide);

console.log("Holy Side: ");
let holySide = [new Doctor("Holy Doc"), new Solider("Holy Solider 1"), new Solider("Holy Solider 2"), new Heavy("Holy Heavy1"), new Heavy("Holy Heavy2"), new Heavy("Holy Heavy3")];
//console.log(holySide);

let coin = Math.floor((Math.random() * 10) + 1);
let winner;
if (coin % 2 > 0) {
    console.log("Dark Side first");
    //winner = Battle(darkSide, holySide);
    winner = Battle.call(null, darkSide, holySide);
} else {
    console.log("Holy Side first");
    //winner = Battle(holySide, darkSide);
    winner = Battle.call(null, holySide, darkSide);
}

if (winner) {
    let winnersNames = "";
    for (let i = 0; i < winner.length; i++) {
        if (i === winner.length - 1) {
            winnersNames += winner[i].getName();
            break;
        }
        winnersNames += winner[i].getName() + ", ";

    }

    console.log(winnersNames + " are the winners!")
} else {
    console.log("Wow! It`s a Draw")
}