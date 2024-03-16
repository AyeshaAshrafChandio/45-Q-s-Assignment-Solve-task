//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.//


// Define the person's name
const personName: string = "HASNAIN HAIDER";

// Function to convert the name to titlecase
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Print the name in lowercase, uppercase, and titlecase
console.log("Name in lowercase:", personName.toLowerCase());
console.log("Name in uppercase:", personName.toUpperCase());
console.log("Name in titlecase:", toTitleCase(personName));
