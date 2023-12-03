const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the foul string: ', str => {
    console.log(disemvowel(str));
    readline.close();
})

function disemvowel(str) {
    /*
    str to char array
    vowel arr list 
    compare
    append
      
    */
    
    let str_array = str.split('');
    console.log(str_array);
    let vowels = ['a','e','i','o','u','A','E','I','O','U']; 
    let removed_str = '';
    
    str_array.forEach((char) => {
        
        for(let i = 0; i < vowels.length; i++){
            if(char === vowels[i]){
                char = '';
            }
        }

        removed_str += char;
    }
    );
    
    str = removed_str;
    
    return str + '\n' + str.replace(/[aeiou]/gi, '');
  }