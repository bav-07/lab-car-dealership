const Car = require('./car');
const Customer = require('./customer');

const Dealership = function(name, maxCapacity, stock) {
    this.name = name;
    this.maxCapacity = maxCapacity;
    this.stock = stock;
};

Dealership.prototype.countCars = function() {
    return this.stock.length;
}

Dealership.prototype.addCarToStock = function(car) {
    if (this.stock.length < this.maxCapacity) {
        this.stock.push(car);
        return;
    }
    return "Dealership full";
}

Dealership.prototype.manufacturerForEachCar = function() {
    return this.stock.map((car) => car.manufacturer);
}

// Modified to search by property (manufacturer, price or engine)
Dealership.prototype.findCarByProperty = function(property, desiredValue) {
    return this.stock.filter((car) => {
        return car[property] === desiredValue;
    });
}

Dealership.prototype.totalStockValue = function() {
    return this.stock.reduce((accumulator, car) => accumulator + car.price, 0);
}

Dealership.prototype.sellCar = function(desiredModel) {
    const newStock = this.stock.filter((car) => {
        return car.model != desiredModel;
    });
    this.stock = newStock;
    return this.stock;
}

module.exports = {Dealership};