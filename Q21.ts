//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define objects containing information about mountains and rivers in Pakistan
const pakistanLocations: { [key: string]: string }[] = [
    { name: "K2", type: "Mountain" },
    { name: "Nanga Parbat", type: "Mountain" },
    { name: "Himalayas", type: "Mountain" },
    { name: "Indus River", type: "River" },
    { name: "Jhelum River", type: "River" },
    { name: "Chenab River", type: "River" }
];

// Print the objects
console.log("Mountains and rivers in Pakistan:");
pakistanLocations.forEach(location => {
    console.log(`Name: ${location.name}, Type: ${location.type}`);
});
