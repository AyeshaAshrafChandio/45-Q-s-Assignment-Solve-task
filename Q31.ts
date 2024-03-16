//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.//

// Define an array of usernames
let usernames: string[] = ["sana", "admin", "kashaf", "admin", "komal"];

// to greet users based on their username
function greetUsers(usernames: string[]): void {
    if (usernames.length === 0) {
        console.log("We need to find some users!");
    } else {
        for (let username of usernames) {
            if (username === 'admin') {
                console.log("Hello admin, would you like to see a status report?");
            } else {
                console.log(`Hello ${'Eric'}, thank you for logging in again.`);
            }
        }
    }
}

// Call the greetUsers function with the array of usernames
greetUsers(usernames);

// Remove all usernames
usernames = [];

// Call greetUsers again after removing all usernames
greetUsers(usernames);
