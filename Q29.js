//Favorite Fruit: Make a array of your favorite fruits, and then write a series of indepenent if statements //that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your arr//ay. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// Define an array of favorite fruits
var favorite_fruits = ["watermellon", "grapes", "orange"];
// Function to check if a fruit is one of the favorite fruits
function checkForFruit(fruit) {
    if (favorite_fruits.indexOf(fruit) !== -1) {
        console.log("I really like ".concat(fruit, "s!"));
    }
    else {
        console.log("I don't seem to like ".concat(fruit, "s."));
    }
}
// Check for certain fruits using independent if statements
checkForFruit("watermellon");
checkForFruit("grapes");
checkForFruit("orange");
checkForFruit("peach");
checkForFruit("gava");
