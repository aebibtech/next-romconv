/* 
  This code works with numbers up to 3,999,999
  
  author: Aebibtech
*/

export default function convertToRoman(num) {
    const oneSymbols = ["I", "IV", "V", "IX"];
    const tenSymbols = ["X", "XL", "L", "XC"];
    const hundredSymbols = ["C", "CD", "D", "CM"];
    const thousandSymbols = ["M", "IV", "V", "IX"];

    function convert(val, symbols = [], bar = false) {
      let roman = "";
      let overline = bar ? "\u0305" : "";
      if(val > 0){
        if(val === 9) {
          roman += symbols[3].split("").join(overline) + overline;
        }
        if(val >= 5 && val < 9) {
          if(symbols[0] == "M") {
            roman += `${symbols[2]}${overline}${symbols[0].repeat(val - 5)}`;
          } else {
            roman += symbols[2].concat(symbols[0].repeat(val - 5))
                  .split("").join(overline) + overline;
          }
        }
        if(val === 4) {
          roman += symbols[1].split("").join(overline) + overline;
        }
        if(val < 4) {
          if(symbols[0] == "M") {
            roman += symbols[0].repeat(val);
          } else {
            roman += symbols[0].repeat(val).split("").join(overline) + overline;
          }
        }
      }
      return roman;
    }   
  
    return "M\u0305".repeat(Number(num.charAt(num.length - 7))) // Millions
        + convert(Number(num.charAt(num.length - 6)), hundredSymbols, true) // Hundred Thousands 
        + convert(Number(num.charAt(num.length - 5)), tenSymbols, true) // Ten Thousands
        + convert(Number(num.charAt(num.length - 4)), thousandSymbols, true) // Thousands
        + convert(Number(num.charAt(num.length - 3)), hundredSymbols, false) // Hundreds
        + convert(Number(num.charAt(num.length - 2)), tenSymbols, false) // Tens
        + convert(Number(num.charAt(num.length - 1)), oneSymbols, false); // Ones
  }