//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const names: string[] =['zuhaib', 'rimsha', 'mahnoor', 'saba','sana'];
const greetingMessage: string='when shumaila marriage comes?';
//Define the greeting message

// Loop through the names array and print personalized messages
names.forEach(name => {
    console.log(`${greetingMessage}${name}!`);
});
