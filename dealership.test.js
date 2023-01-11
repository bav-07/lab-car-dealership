const {Car} = require('./car');
const {Dealership} = require('./dealership');

let AE86, R32, FD, Countach, Porsche911, F40, E26, DB9, M3, GTO;
let bavCars;
let stock;

beforeEach(() => {
    AE86 = new Car("Toyota", "Trueno", 110000, "4A-GE");
    R32 = new Car("Nissan", "Skyline", 30000, "2.6L RB");
    FD = new Car("Mazda", "RX-7", 45000, "13B-REW");
    Countach = new Car("Lamborghini", "Countach", 250000, "LP400");
    Porsche911 = new Car("Porsche", "911", 250000, "3.3L");
    F40 = new Car("Ferrari", "F40", 2500000, "Dino V8");
    E26 = new Car("BMW", "M1", 800000, "3.5L M88/1 I6");
    DB9 = new Car("Aston Martin", "DB9", 250000, "5.9L V12");
    M3 = new Car("BMW", "M3", 20000, "2.5L V6");
    GTO = new Car("Ferrari", "288 GTO", 600000, "Dino V8");
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
        const actual = bavCars.findCarByProperty("manufacturer","BMW");
        expect(actual).toStrictEqual(expected);
    })
    test('can search stock by price', () => {
        bavCars.addCarToStock(DB9);
        const expected = [ Countach, Porsche911, DB9 ];
        const actual = bavCars.findCarByProperty("price", 250000);
        expect(actual).toStrictEqual(expected);
    })
    test('can search stock by engine', () => {
        bavCars.addCarToStock(GTO);
        const expected = [ F40 , GTO ];
        const actual = bavCars.findCarByProperty("engine","Dino V8");
        expect(actual).toStrictEqual(expected);
    })
    test('can search stock by model', () => {
        const expected = [ AE86 ];
        const actual = bavCars.findCarByProperty("model", "Trueno");
        expect(actual).toStrictEqual(expected);
    })
    test('can find total stock value', () => {
        const expected = 3985000;
        const actual = bavCars.totalStockValue();
        expect(actual).toBe(expected);
    })
    test('can sell car', () => {
        const expected = [AE86, R32, Countach, Porsche911, F40, E26];
        const actual = bavCars.sellCar("RX-7");
        expect(actual).toStrictEqual(expected);
    })
})