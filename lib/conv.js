/* 
  This code works with numbers up to 3,999,999
  
  author: Aebibtech
*/
import { symbols } from "./symbols";

function convertDigit(val, syms = []) {
  if(val === 9) {
    return syms[3];
  }
  if(val >= 5 && val < 9) {
    return `${syms[2]}${syms[0].repeat(val - 5)}`;
  }
  if(val === 4) {
    return syms[1];
  }
  if(val < 4 && val > 0) {
    return syms[0].repeat(val);
  }

  return "";
}

export default function convertToRoman(num) {
    // turn number to array, reverse the number to match place value as a human thinks so, process it, reverse the result, turn it back to string
    return num.split("").reverse().map((digit, placeValue) => convertDigit(Number(digit), symbols[placeValue])).reverse().join("");
}