const {Car} = require('./car');
const {Customer} = require('./customer');
const {Dealership} = require('./dealership');

let AE86, R32, FD, Countach, Porsche911, F40, E26, DB9, M3, GTO;
let bavCars;
let stock;
let david;

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
    david = new Customer("David", 2000000);
})

describe('testing customer buying method', () => {
    test('customer can buy car', () => {
        david.buyCar(bavCars, "Skyline");
        const expected = [ R32 ];
        const actual = david.car;
        expect(actual).toStrictEqual(expected);
    })
    test('customer can buy car and wallet decreases', () => {
        david.buyCar(bavCars, "Skyline");
        const expected = 1970000;
        const actual = david.wallet;
        expect(actual).toStrictEqual(expected);
    })
    test('customer can buy car and car leaves dealership', () => {
        david.buyCar(bavCars, "Countach");
        const expected = [AE86, R32, FD, Porsche911, F40, E26];
        const actual = bavCars.stock;
        expect(actual).toStrictEqual(expected);
    })
    test('customer cannot buy non-existent car', () => {
        const expected = "Model not available";
        const actual = david.buyCar(bavCars, "GT86");
        expect(actual).toStrictEqual(expected);
    })
    test('customer cannot buy too expensive car', () => {
        const expected = "Too expensive";
        const actual = david.buyCar(bavCars, "F40");
        expect(actual).toStrictEqual(expected);
    })
})