//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log(" I ordered a ".concat(size, " T-shirt with the message: \"").concat(message, "\"."));
}
//  the function for a large shirt with default message
makeShirt();
//  the function for a medium shirt with default message
makeShirt('Medium');
//  the function for a shirt of any size with a different message
makeShirt('Small', 'BLACK PINK TOUR');
