// solution for leetcode #9: palindrome number
// find step-by-step solutions at: https://nimraahmed.hashnode.dev/

var isPalindrome = function(x) {
    let s = x.toString();
    let t = s.split("").reverse().join("");
    return s === t;
};

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) //false 


// Solution with log(n) runtime
var isPalindromeOptimized = function(x){
      if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    while (x > reversed) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return x === reversed || x === Math.floor(reversed / 10);
}

console.log(isPalindromeOptimized(121)) // true
console.log(isPalindromeOptimized(-121)) // false
console.log(isPalindromeOptimized(10)) // false
