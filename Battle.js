function Battle(firstSquad, secondSquad) {
    let firstAliveCounter = firstSquad.length;
    let secondAliveCounter = secondSquad.length;
    let randomNumber;

    while (firstAliveCounter > 0 && secondAliveCounter > 0) {
        console.log("New round. Fight!");
        for (let i = 0; i < firstAliveCounter; i++) {
            if (firstSquad[i].__proto__.hasOwnProperty("heal")) {
                randomNumber = Math.floor(Math.random() * i);
                firstSquad[i].heal(firstSquad[randomNumber]);
                continue;
            }
            if (firstSquad[i].__proto__.hasOwnProperty("handAttack")) {
                randomNumber = Math.floor(Math.random() * secondAliveCounter);
                firstSquad[i].handAttack(secondSquad[randomNumber]);
                continue;
            }
            if (firstSquad[i].__proto__.hasOwnProperty("machineGunAttack")) {
                randomNumber = Math.floor(Math.random() * secondAliveCounter);
                firstSquad[i].machineGunAttack(secondSquad[randomNumber], i)
            }
        }

        for (let i = 0; i < secondAliveCounter; i++) {
            if (!secondSquad[i].isAlive()) {
                secondSquad.push(secondSquad[i]);
                secondSquad.splice(i, 1);
                --secondAliveCounter;
                --i;
            }
        }

        for (let i = 0; i < secondAliveCounter; i++) {
            if (secondSquad[i].__proto__.hasOwnProperty("heal")) {
                randomNumber = Math.floor(Math.random() * i);
                secondSquad[i].heal(secondSquad[randomNumber]);
            }
            if (secondSquad[i].__proto__.hasOwnProperty("handAttack")) {
                randomNumber = Math.floor(Math.random() * secondAliveCounter);
                secondSquad[i].handAttack(firstSquad[randomNumber]);
            }
            if (secondSquad[i].__proto__.hasOwnProperty("machineGunAttack")) {
                randomNumber = Math.floor(Math.random() * secondAliveCounter);
                secondSquad[i].machineGunAttack(firstSquad[randomNumber], i)
            }
        }

        for (let i = 0; i < firstAliveCounter; i++) {
            if (!firstSquad[i].isAlive()) {
                firstSquad.push(firstSquad[i]);
                firstSquad.splice(i, 1);
                --firstAliveCounter;
                --i;
            }
        }
    }
    console.log("First team alive: " + firstAliveCounter + "; Second team alive: " + secondAliveCounter);
    console.log("Results: ");
    console.log(firstSquad);
    console.log();
    console.log(secondSquad);
    if (firstAliveCounter > secondAliveCounter) {
        return firstSquad;
    }

    if (secondAliveCounter > firstAliveCounter) {
        return secondSquad;
    }
}

module.exports = Battle;