// Only change code below this line
class Car {
    constructor(manufacturer, model, production){
        this._manufacturer = manufacturer;
        this._model = model;
        this._production = production;
    }
}

// Only change code above this line
const bmw = new Car("BMW", "BMW X3", 2003);
console.log(bmw._manufacturer);
console.log(bmw._model);
console.log(bmw._production);

module.exports = Car;