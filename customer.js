const Car = require('./car');
const Dealership = require('./dealership');

const Customer = function(name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}

Customer.prototype.buyCar = function(dealership, desiredModel) {
    const desiredCar = dealership.findCarByProperty("model", desiredModel);
    if (desiredCar.length !== 0){
        if (this.wallet < desiredCar[0]["price"]){
            return "Too expensive";
        }
        this.car = desiredCar;
        this.wallet = this.wallet - desiredCar[0]["price"];
        dealership.sellCar(desiredModel);
        return this.car;
    }
    return "Model not available"
}

module.exports = {Customer};