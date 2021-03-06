const fs = require('fs');
const readline = require('readline');

let writefun = (data)=>{
  return new Promise((resolve,reject)=>{
    fs.appendFile("new.txt", data+'\n', (err)=>{
      if(err) reject()
      resolve()
    })
  })
}

let checkfun = async (onedata)=>{
  const file = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    output: process.stdout,
    terminal: false
    });
    return new Promise((resolve, reject)=>{
      file.on('line', async (line)=>{
        if(line == onedata){
          await writefun(line)
        }
      })
      file.on('close', ()=>{
        resolve('oneeee')
      })
    })
}

async function call(){
  for(i=1; i<=99; i++){
    await checkfun(i)
  }
}

call()

/*
the possible number is given between 1 to 99 so here iterating through 1 to 99 from for loop
and iterating through file, if that number is present in file that number is written into new
file 
*/