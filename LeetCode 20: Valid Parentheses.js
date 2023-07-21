/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let parentheses = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    if (s.length % 2 !== 0) {
        return false; 
    }

    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
            stack.push(s[i]);
        } else {
            let lastOpening = stack.pop();
            if (parentheses[lastOpening] !== s[i]) {
                return false; 
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid('(]')) //false
console.log(isValid('(([]){})')) //true
console.log(isValid('{[()]}')) //true
console.log(isValid('(((')) //false
