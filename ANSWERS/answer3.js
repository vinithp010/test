const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');

const file = readline.createInterface({
    input: fs.createReadStream('logg.txt'),
    output: process.stdout,
    terminal: false
});

let list = []
file.on('line',(line)=>{
    let one = line.split('#')[1].split(' ')[0]
    list.push(one)
})

file.on('close',()=>{
    const counts = {};
    list.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    for (const [key, value] of Object.entries(counts)) {
        console.log(`${key} action ran ${value} times` );
      }
})

/*
here reading file line by line and spliting and checking for function name, if function is present 
then counting the function
*/

