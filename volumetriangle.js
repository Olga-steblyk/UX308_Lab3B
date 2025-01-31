//calculate the volume of an equilateral triangle prism from the 
//length of one side of the triangle 
//and the length of the flat edge

//V = (√3/4) a^2 × h
var flatlength = 10; //h
var sidelength = 5; //a
function volumetriangle (flatlength, sidelength){
    var volume = ((Math.sqrt(3))/4) * (sidelength ** 2) * flatlength;
    return volume;
}

export {volumetriangle} 
//console.log(volumetriangle(10,5));