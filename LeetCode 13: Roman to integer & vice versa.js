// Solution to LeetCode #13: Roman to Integer and freeCodeCamp's Roman numeral converter
// Find step-by-step explanation here: https://nimraahmed.hashnode.dev/


// Roman to integer
var romanToInt = function(s) {
let total = 0
 const lookupTable ={
     M: 1000,
     D: 500,
     C: 100,
     L: 50,
     XL: 40,
     X: 10,
     V: 5,
     I: 1
 }
 for(let i=0; i<s.length; i++){
     let curr = s[i]
     let next = s[i+1]
     if(lookupTable[curr]<lookupTable[next]){
         total = total - lookupTable[curr]
     } else{
         total = total + lookupTable[curr]
     }
 }
 return total
};

console.log(romanToInt('MCMXCIV')) // 1994


// Integer to Roman
function convertToRoman(num) {
  const lookupTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9, 
    V: 5,
    IV: 4,
    I: 1,
  }

  let accumulator = ''
  for(let key in lookupTable){
    const numberVal = lookupTable[key]
    // console.log(key, numberVal)
    while(numberVal <= num){
      num -= numberVal
      accumulator += key
    } 
  }
return accumulator

}

console.log(convertToRoman(36)); // XXXVI
