const {Car} = require('./car');

let AE86, R32, FD, Countach, Porsche911, F40, E26;

beforeEach(() => {
    AE86 = new Car("Toyota", "Trueno", 110000, "4A-GE");
    R32 = new Car("Nissan", "Skyline", 30000, "2.6L RB");
    FD = new Car("Mazda", "RX-7", 45000, "13B-REW");
    Countach = new Car("Lamborghini", "Countach", 300000, "LP400");
    Porsche911 = new Car("Porsche", "911", 250000, "3.3L");
    F40 = new Car("Ferrari", "F40", 2500000, "2.9L V8");
    E26 = new Car("BMW", "M1", 800000, "3.5L M88/1 I6");
})

describe('testing properties', () => {
    test('can obtain manufacturer', () => {
        const expected = "Nissan";
        const actual = R32.manufacturer;
        expect(actual).toBe(expected);
    })
    test('can obtain model', () => {
        const expected = "RX-7";
        const actual = FD.model;
        expect(actual).toBe(expected);
    })
    test('can obtain price', () => {
        const expected = 300000;
        const actual = Countach.price;
        expect(actual).toBe(expected);
    })
    test('can obtain engine', () => {
        const expected = "2.9L V8";
        const actual = F40.engine;
        expect(actual).toBe(expected);
    })
})