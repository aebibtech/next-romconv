/* 
  This code works with numbers up to 3,999,999
  
  author: Aebibtech
*/
function convert(val, syms = []) {
  if(val === 9) {
    return syms[3];
  }
  if(val >= 5 && val < 9) {
    return `${syms[2]}${syms[0].repeat(val - 5)}`;
  }
  if(val === 4) {
    return syms[1];
  }
  if(val < 4) {
    return syms[0].repeat(val);
  }

  return "";
}

export default function convertToRoman(num) {
    const overlined = (sym) => `${sym.split("").join("\u0305")}\u0305`;
    const oneSymbols = ["I", "IV", "V", "IX"];
    const tenSymbols = ["X", "XL", "L", "XC"];
    const hundredSymbols = ["C", "CD", "D", "CM"];
    const thousandSymbols = oneSymbols.map(overlined); thousandSymbols[0] = "M";
    const tThousandSymbols = tenSymbols.map(overlined);
    const hThousandSymbols = hundredSymbols.map(overlined);
    const millionSymbols = ["M\u0305", "", "", ""];
    const symbols = [oneSymbols, tenSymbols, hundredSymbols, thousandSymbols, tThousandSymbols, hThousandSymbols, millionSymbols];
    
    // turn number to array, reverse the number, process it, reverse the result, turn it back to string
    return num.split("").reverse().map((val, index) => convert(Number(val), symbols[index])).reverse().join("");
  }