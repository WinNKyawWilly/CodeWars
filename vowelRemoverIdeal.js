const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the fould string: ', str =>{
    console.log(str.replace(/[aeiou]/gi, '')); // g = global, i = case insensitive
    readline.close();
})