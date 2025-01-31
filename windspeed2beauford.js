//*convert* a windspeed to  a description using The Beaufort Wind Scale.
// THIS WILL USE THE UNITS OF KNOTS
//

function windspeed2beau(knots){
    var beaufort;

    if (knots <= 1){ // Calm,
        return beaufort = "Calm , BN :0";
    }else if (knots > 1 && knots < 4){
        return beaufort = "Light Air, BN:1";
    }else if (knots >=4 && knots <7){
        return beaufort ="Light Breeze, BN:2";
    }else if (knots >= 7 && knots <13){
        return beaufort ="Gentle Breeze, BN:3";
    }else if (knots >=13 && knots <17){
        return beaufort ="Moderate Breeze, BN:4";
    }else if (knots >17 && knots <22){
        return beaufort ="Fresh Breeze, BN:5";
    }else if (knots >=22 && knots <28){
        return beaufort ="Strong Breeze, BN:6";
    }else if (knots >=28 && knots <34){
        return beaufort ="Near Gale, BN:7";
    }else if (knots >=34 && knots <41){
        return beaufort ="Gale, BN:8";
    }else if (knots >=41 && knots <48){
        return beaufort ="Strong Gale, BN:9";
    }else if (knots >=48 && knots <56){
        return beaufort ="Storm, BN:10";
    }else if (knots >=56 && knots <64){
        return beaufort ="Violent Storm, BN:11";
    }else if (knots >64){
        return beaufort ="Hurricane, BN12";
    }else{
        return beaufort = "Your input was invalid please try again";
    }

}
console.log(windspeed2beau (45));

export { windspeed2beau }