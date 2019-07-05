const Solider = require('./Solider.js');
const Unit = require('./Unit.js');

function Heavy(name) {
    Solider.apply(this, arguments);
    this.resistanceToDamage = 0.2;
}

Heavy.prototype = Object.create(Solider.prototype);

Heavy.prototype.machineGunAttack = function (unit, amountOfShots) {
    let amount = 0;
    for (let i = 0; i < amountOfShots; i++) {
        amount += this.handAttack(unit);
    }
    return amount;
};

Heavy.prototype.takeDamage = function (amount) {
    if (this._health <= 0) {
        return;
    }

    this._health = Math.round(this._health - amount * this.resistanceToDamage);
    this.earnExperience(Unit.damageXp);
};

module.exports = Heavy;