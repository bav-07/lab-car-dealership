const Car = require('./car');
const Dealership = require('./dealership');

const Customer = function(name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}

Customer.prototype.buyCar = function(dealership, desiredModel) {
    desiredCar = dealership.findCarByProperty("model", desiredModel);
    if (desiredCar != [] && this.wallet > desiredCar.price){
        this.car = desiredCar;
        dealership.stock.splice(dealership.stock.indexOf(desiredCar), 1);
    }
}

module.exports = {Customer};