const Unit = require('./Unit.js');

function Doctor(name) {
    Unit.apply(this, arguments);
    this._healPower = 10;
}

Doctor.prototype = Object.create(Unit.prototype);

Doctor.prototype.heal = function (unit) {
    let level = this.getLevel();
    let amount = (level > 1) ? Math.round(this._healPower * (1 + level / 10)) : this._healPower;

    unit.addHealth(amount);
    console.log(unit.getName() + " has been healed by " + this.getName() + " on " + amount + " hp");

    this.earnExperience(Unit.actionXp);

    return amount;
};

module.exports = Doctor;