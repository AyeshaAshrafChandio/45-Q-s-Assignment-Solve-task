//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Define an array of favorite modes of transportation
var favoriteTransportation = ["bike", "bycycle", "car", "truck"];
// Loop through the array  statements
favoriteTransportation.forEach(function (mode) {
    console.log("I would like to own a ".concat(mode, "."));
});
