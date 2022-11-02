// Roman numeral symbols | Author: Aebibtech
const overlined = (sym) => `${sym.split("").join("\u0305")}\u0305`;
const oneSymbols = ["I", "IV", "V", "IX"];
const tenSymbols = ["X", "XL", "L", "XC"];
const hundredSymbols = ["C", "CD", "D", "CM"];
const thousandSymbols = oneSymbols.map(overlined); thousandSymbols[0] = "M";
const tThousandSymbols = tenSymbols.map(overlined);
const hThousandSymbols = hundredSymbols.map(overlined);
const millionSymbols = ["M\u0305", "", "", ""];
export const symbols = [oneSymbols, tenSymbols, hundredSymbols, thousandSymbols, tThousandSymbols, hThousandSymbols, millionSymbols];