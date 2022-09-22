/* 
  This code works with numbers up to 3999
  One can add a bunch of conditionals and computation
  for another place value. An alternative to computation
  is to convert the number to a string and get the place
  value from there.
  author: Aebibtech
*/

export default function convertToRoman(num) {
    const numb = Number(num);
    let thousands = Math.floor((numb / 1000) % 10);  // thousands place value
    let hundreds = Math.floor(( (numb / 100) % 100 ) % 10); // hundreds place value
    let tens = Math.floor(( numb / 10 ) % 10); // tens place value
    let ones = numb % 10; // ones place value
    let result = ""; // accumulator
    
    /* Making sure that we will just do something
       if the place value digit is greater than 0.
       That saves some time. 
     */
    // thousands logic
    if(thousands > 0){
      result += "M".repeat(thousands);
    }
  
    // hundreds logic
    if(hundreds > 0) {
      if(hundreds === 9) {
        result += "CM";
      }
  
      if(hundreds > 5 && hundreds < 9) {
        result += "D" + "C".repeat(hundreds - 5);
      }
  
      if(hundreds === 5) {
        result += "D";
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
  
      if(tens > 5 && tens < 9) {
        result += "L" + "X".repeat(tens - 5);
      }
  
      if(tens === 5) {
        result += "L";
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
  
      if(ones > 5 && ones < 9) {
        result += "V" + "I".repeat(ones - 5);
      }
      
      if(ones === 5) {
        result += "V";
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