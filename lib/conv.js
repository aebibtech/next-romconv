/* 
  This code works with numbers up to 3999
  One can add a bunch of conditionals and computation
  for another place value. An alternative to computation
  is to convert the number to a string and get the place
  value from there.
  author: Aebibtech
*/

export default function convertToRoman(num) {
    //const numb = Number(num);
    let tenThousands = Number(num[num.length - 5]);
    let thousands = Number(num[num.length - 4]);
    let hundreds = Number(num[num.length - 3]);
    let tens = Number(num[num.length - 2]);
    let ones =  Number(num[num.length - 1]);
    let overline = "\u0305";
    let result = ""; // accumulator

    /* Making sure that we will just do something
       if the place value digit is greater than 0.
       That saves some time. 
     */

    if(tenThousands > 0){
      if(tenThousands === 9) {
        result += "XC".split("").join(overline) + overline;
      }
      if(tenThousands >= 5 && tenThousands < 9) {
        result += "L".concat("I".repeat(tenThousands - 5))
                .split("").join(overline) + overline;
      }
      if(tenThousands === 4) {
        result += "XL".split("").join(overline) + overline;
      }
      if(tenThousands < 4) {
        result += "X".repeat(tenThousands).split("").join(overline) + overline;
      }
    }

    // thousands logic
    if(thousands > 0){
      if(thousands === 9) {
        result += "IX".split("").join(overline) + overline;
      }
      if(thousands >= 5 && thousands < 9) {
        result += "V".concat("I".repeat(thousands - 5))
                .split("").join(overline) + overline;
      }
      if(thousands === 4) {
        result += "IV".split("").join(overline) + overline;
      }
      if(thousands < 4) {
        result += "M".repeat(thousands);
      }
    }
  
    // hundreds logic
    if(hundreds > 0) {
      if(hundreds === 9) {
        result += "CM";
      }
  
      if(hundreds >= 5 && hundreds < 9) {
        result += "D" + "C".repeat(hundreds - 5);
      }
  
      if(hundreds === 4) {
        result += "CD";
      }
  
      if(hundreds > 0 && hundreds < 4) {
        result += "C".repeat(hundreds);
      }
    }
    
  
    // tens logic
    if(tens > 0) {
      if(tens === 9) {
        result += "XC";
      }
  
      if(tens >= 5 && tens < 9) {
        result += "L" + "X".repeat(tens - 5);
      }
  
      if(tens === 4) {
        result += "XL";
      }
  
      if(tens > 0 && tens < 4) {
        result += "X".repeat(tens);
      }
    }
  
    // ones logic
    if(ones > 0) {
      if(ones === 9) {
        result += "IX";
      }
  
      if(ones >= 5 && ones < 9) {
        result += "V" + "I".repeat(ones - 5);
      }
  
      if(ones === 4) {
        result += "IV";
      }
  
      if(ones > 0 && ones < 4) {
        result += "I".repeat(ones);
      }
    }
  
    return result;
  }