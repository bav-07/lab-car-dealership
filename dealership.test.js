const {Car} = require('./car');
const {Dealership} = require('./dealership');

let AE86, R32, FD, Countach, Porsche911, F40, E26;
let dealership;
let stock;

beforeEach(() => {
    AE86 = new Car("Toyota", "Trueno", 110000, "4A-GE");
    R32 = new Car("Nissan", "Skyline", 30000, "2.6L RB");
    FD = new Car("Mazda", "RX-7", 45000, "13B-REW");
    Countach = new Car("Lamborghini", "Countach", 300000, "LP400");
    Porsche911 = new Car("Porsche", "911", 250000, "3.3L");
    F40 = new Car("Ferrari", "F40", 2500000, "2.9L V8");
    E26 = new Car("BMW", "M1", 800000, "3.5L M88/1 I6");
    stock = [AE86, R32, FD, Countach, Porsche911, F40, E26];
    dealership = new Dealership("Bav's Cars", 9, stock);
})

describe('testing dealership stock methods', () => {
    test('can count cars in stock', () => {
        const expected = 7;
        const actual = dealership.stock.length;
        expect(actual).toBe(expected);
    })
})