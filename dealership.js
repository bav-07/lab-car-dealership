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

Dealership.prototype.manufacturerForEachCar = function() {
    return this.stock.map((car) => car.manufacturer);
}

Dealership.prototype.findCarByManufacturer = function(searchedManufactuer) {
    const manufacturerCars = this.stock.filter((car) => {
        return car.manufacturer === searchedManufactuer;
    });
    return manufacturerCars;
}

Dealership.prototype.totalStockValue = function() {
    return this.stock.reduce((accumulator, car) => accumulator + car.price, 0);
}

module.exports = {Dealership};