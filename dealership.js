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
    const propertyCars = this.stock.filter((car) => {
        return car[property] === desiredValue;
    });
    return propertyCars;
}

Dealership.prototype.totalStockValue = function() {
    return this.stock.reduce((accumulator, car) => accumulator + car.price, 0);
}

module.exports = {Dealership};