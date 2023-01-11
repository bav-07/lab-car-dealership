const Car = require('./car');

const Customer = function(name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}

Customer.prototype.buyCar()

module.exports = {Customer};