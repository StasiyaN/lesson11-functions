//1
function isPalindrome(string) {
    const reversedString = string.split('').reverse().join('');
    return string === reversedString
}

console.log(isPalindrome('казак'))
console.log(isPalindrome('шалаш'))
console.log(isPalindrome('анна'))
console.log(isPalindrome('аня'))

//2
