//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an sandwich!");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (const item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log(); //  line for readability
}

// Call the function three times with different numbers of arguments
makeSandwich("Sandwich", "Tomato", "egg");
makeSandwich("Kabab","Mustard");
makeSandwich("Pakistani Style sandwich");
