function Unit(name) {
    this._health = Unit.maxHealth;
    this._name = name;
    this._level = 1;
    this._xp = 0;
}

Unit.maxHealth = 100;
Unit.maxXp = 1000;
Unit.actionXp = 250;
Unit.damageXp = 500;

Unit.prototype.getName = function () {
    return this._name;
};

Unit.prototype.getLevel = function () {
    return this._level;
};

Unit.prototype.isAlive = function () {
    return this._health > 0
};

Unit.prototype.addHealth = function (amount) {
    if (!this.isAlive()) {
        return
    }

    this._health += amount;
    if (this._health > Unit.maxHealth) {
        this._health = Unit.maxHealth;
    }
};

Unit.prototype.takeDamage = function (amount) {
    if (this._health <= 0) {
        return;
    }

    this._health = Math.round((this._health - amount));
    this.earnExperience(Unit.damageXp);
};

Unit.prototype.earnExperience = function (amount) {
    this._xp = (this._level > 1) ? Math.round(this._xp + amount * (1 - this._level / 10)) : this._xp + amount;

    if (this._xp > Unit.maxXp) {
        this._levelUp();
    }
};

Unit.prototype._levelUp = function () {
    this._xp -= Unit.maxXp;
    ++this._level;
    console.log(this.getName() + " level up!");
    if (this._xp >= Unit.maxXp) {
        this._levelUp();
    }
};

module.exports = Unit;
