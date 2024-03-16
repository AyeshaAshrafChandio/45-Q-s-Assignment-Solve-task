//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.//
// Strip whitespace function
function stripWhitespace(name) {
    return name.trim();
}
// Main function
function main() {
    // Store the name with whitespace
    var nameWithWhitespace = "\t \n FlowersShine \t \n";
    // Print the name with whitespace
    console.log("Name with whitespace:");
    console.log("'" + nameWithWhitespace + "'");
    // Strip whitespace and print the name after stripping
    console.log("Name after stripping whitespace:");
    var strippedName = stripWhitespace(nameWithWhitespace);
    console.log("'" + strippedName + "'");
}
// Run the main function
main();
