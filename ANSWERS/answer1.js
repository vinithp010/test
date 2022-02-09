
/*
here string is converted into array and iterates through that array and if that number
is equal or grater than 5 then it subtracted by 1 and pushes to array, then converting that
array into string and removing comma
*/

let numb = '65287'
let array = [...numb]
let newarray = []
let newnumb
array.forEach(element => {
    if(element >= 5){
        newarray.push(element-1)
    }else{
        newarray.push(element)
    }
});

console.log((newarray.toString()).replace(/,/g,''))
