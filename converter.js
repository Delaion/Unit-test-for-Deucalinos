// this is my function that converts three currencys
var euroUSDr= 1.2
var euroJPY= 127.9
var euroGBP= 0.8
let a=euroUSDr
let b=euroJPY
let c=euroGBP

const convertUSDrJPY = (a,b,) => {
    return b/a
}

// just a console log for ourselves.
console.log(convertUSDrJPY(1.2,127.9))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };