const {Car} = require('./car');
const {Dealership} = require('./dealership');

let AE86, R32, FD, Countach, Porsche911, F40, E26, DB9, M3;
let bavCars;
let stock;

beforeEach(() => {
    AE86 = new Car("Toyota", "Trueno", 110000, "4A-GE");
    R32 = new Car("Nissan", "Skyline", 30000, "2.6L RB");
    FD = new Car("Mazda", "RX-7", 45000, "13B-REW");
    Countach = new Car("Lamborghini", "Countach", 300000, "LP400");
    Porsche911 = new Car("Porsche", "911", 250000, "3.3L");
    F40 = new Car("Ferrari", "F40", 2500000, "2.9L V8");
    E26 = new Car("BMW", "M1", 800000, "3.5L M88/1 I6");
    DB9 = new Car("Aston Martin", "DB9", 200000, "5.9L V12");
    M3 = new Car("BMW", "M3", 20000, "2.5L V6");
    stock = [AE86, R32, FD, Countach, Porsche911, F40, E26];
    bavCars = new Dealership("Bav's Cars", 8, stock);
})

describe('testing dealership stock methods', () => {
    test('can count cars in stock', () => {
        const expected = 7;
        const actual = bavCars.countCars();
        expect(actual).toBe(expected);
    })
    test('can add car to stock', () => {
        bavCars.addCarToStock(DB9);
        const expected = 8;
        const actual = bavCars.countCars();
        expect(actual).toBe(expected);
    })
    test('fails to add car when stock is at max capacity', () => {
        bavCars.addCarToStock(M3);
        const expected = "Dealership full";
        const actual = bavCars.addCarToStock(DB9);
        expect(actual).toBe(expected);
    })
    test('can obtain array of car manufacturers', () => {
        const expected = ["Toyota", "Nissan", "Mazda", "Lamborghini", "Porsche", "Ferrari", "BMW"];
        const actual = bavCars.manufacturerForEachCar();
        expect(actual).toStrictEqual(expected);
    })
    test('can search stock by manufactuer', () => {
        bavCars.addCarToStock(M3);
        const expected = [ E26 , M3 ];
        const actual = bavCars.findCarByManufacturer("BMW");
        expect(actual).toStrictEqual(expected);
    })
    test('can find total stock value', () => {
        const expected = 4035000;
        const actual = bavCars.totalStockValue();
        expect(actual).toBe(expected);
    })
})