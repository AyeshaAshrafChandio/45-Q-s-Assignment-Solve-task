//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

//• If the person is age 65 or older, print a message that the person is an elder.




// Determine the person's stage of life using an if-else chain
function determineStageOfLife(age: number): void {
    if (age < 2) {
        console.log("The person is a baby.");
    } else if (age >= 2 && age < 4) {
        console.log("The person is a toddler.");
    } else if (age >= 4 && age < 13) {
        console.log("The person is a kid.");
    } else if (age >= 13 && age < 20) {
        console.log("The person is a teenager.");
    } else if (age >= 20 && age < 65) {
        console.log("The person is an adult.");
    } else  if (age >= 20 && age < 25)
        console.log("The person is an elder.");
    }


// different ages
console.log("For age 2:");
determineStageOfLife(4);
console.log("For age 13:");
determineStageOfLife(13);
console.log("For age :20");
determineStageOfLife(20);
console.log("For age 65:");
determineStageOfLife(65);
console.log("For age 60:");
determineStageOfLife(25);
console.log("For age 70:");
determineStageOfLife(70);
