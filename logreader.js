/*

Answer for first question : 45276
*/

///////////////////////////////////////////////
/*
answer for second question
*/


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

