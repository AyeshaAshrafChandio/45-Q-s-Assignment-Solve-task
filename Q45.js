//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly
// function to create a car object
function createCar(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    //  information to the car object
    extras.forEach(function (extra) {
        var key = extra[0], value = extra[1];
        car[key] = value;
    });
    return car;
}
//  the function with required information and additional name-value pairs
var myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2024]);
// Print the car object
console.log(myCar);
