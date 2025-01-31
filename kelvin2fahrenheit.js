//given a temperature in kelvin *convert* to fahrenheit.
//F = (K − 273.15) × 1.8 + 32

// var - 2.73.15
//var * 1.8
// var + 32

//let kelvin = 300;
function kelvin2fahr(kelvin){
    let subtract = kelvin - 273.15;
    let multiply = subtract * 1.8;
    let fahr = multiply + 32;
    return fahr;

}

//console.log(`kelvin2fahr(300)`);

export {kelvin2fahr}