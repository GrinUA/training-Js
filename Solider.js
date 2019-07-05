const Unit = require('./Unit');

function Solider(name) {
    Unit.apply(this, arguments);
    this._attackPower = 15
}

Solider.prototype = Object.create(Unit.prototype);

Solider.prototype.handAttack = function (unit) {
    let level = this.getLevel();
    let amount = (level > 1) ? Math.round(this._attackPower * (1 + level / 10)) : this._attackPower;

    unit.takeDamage(amount);
    this.earnExperience(Unit.actionXp);
    console.log(this.getName() + " dealt " + amount + " damage to " + unit.getName());

    return amount;
};

module.exports = Solider;