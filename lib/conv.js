/* 
  This code works with numbers up to 3,999,999
  
  author: Aebibtech
*/

export default function convertToRoman(num) {
    let millions = Number(num[num.length - 7]);
    let hundredThousands = Number(num[num.length - 6]);
    let tenThousands = Number(num[num.length - 5]);
    let thousands = Number(num[num.length - 4]);
    let hundreds = Number(num[num.length - 3]);
    let tens = Number(num[num.length - 2]);
    let ones =  Number(num[num.length - 1]);

    let oneSymbols = ["I", "IV", "V", "IX"];
    let tenSymbols = ["X", "XL", "L", "XC"];
    let hundredSymbols = ["C", "CD", "D", "CM"];
    let thousandSymbols = ["M", "IV", "V", "IX"];

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
  
    return (millions ? "M\u0305".repeat(millions) : "")
        + convert(hundredThousands, hundredSymbols, true) 
        + convert(tenThousands, tenSymbols, true)
        + convert(thousands, thousandSymbols, true)
        + convert(hundreds, hundredSymbols, false)
        + convert(tens, tenSymbols, false)
        + convert(ones, oneSymbols, false);
  }