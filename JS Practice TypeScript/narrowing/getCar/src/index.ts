interface Car {
    brand: string;
    model: string;
    year: number;
}

interface CarWithBrand {
    brand: string;
}

function getCar(car: Car | CarWithBrand):string {
    return 'model' in car && 'year' in car 
        ? `Car\n brand: ${car.brand}\n model: ${car.model}\n year: ${car.year}\n`
        : `CarWithBrand\n brand: ${car.brand}`
}

const car1: Car = { brand: 'BMW', model: 'M2', year: 2015 };
const car2: CarWithBrand = { brand: 'Geely' };
console.log(getCar(car1));
console.log(getCar(car2));