const Car = require('./car');

const Dealership = function(name, maxCapacity, stock) {
    this.name = name;
    this.maxCapacity = maxCapacity;
    this.stock = stock;
};

Dealership.prototype.countCars = function() {
    return this.stock.length;
}

Dealership.prototype.addCarToStock = function(car) {
    this.stock.push(car);
}

module.exports = {Dealership};