// Determine the person's stage of life using an if-else chain
function determineStageOfLife(age) {
    if (age < 2) {
        console.log("The person is a baby.");
    }
    else if (age >= 2 && age < 4) {
        console.log("The person is a toddler.");
    }
    else if (age >= 4 && age < 13) {
        console.log("The person is a kid.");
    }
    else if (age >= 13 && age < 20) {
        console.log("The person is a teenager.");
    }
    else if (age >= 20 && age < 65) {
        console.log("The person is an adult.");
    }
    else if (age >= 20 && age < 25)
        console.log("The person is an elder.");
}
// Test different ages
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
