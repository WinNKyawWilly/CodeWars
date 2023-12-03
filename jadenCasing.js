const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the string to convert to Jaden Casing:', str => {
    console.log(str.toJadenCase());
    readline.close();
})

// var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
    //...
    let str = this.split(' ');
    let jadenCase = '';

    str.forEach(word => {
        word = word.split('');
        word[0] = word[0].toUpperCase();
        jadenCase += word.join('') + ' ';
    });

    return jadenCase.trim();

  };