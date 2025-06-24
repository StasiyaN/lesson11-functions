//1
function isPalindrome(word) {
    const wordToLowerCase = word.toLowerCase();
    const reversedWord = wordToLowerCase.split('').reverse().join('');
    return wordToLowerCase === reversedWord
}

console.log(isPalindrome('казак'))
console.log(isPalindrome('шалаш'))
console.log(isPalindrome('анна'))
console.log(isPalindrome('аня'))

//2
function shortestWord (phrase) {
    const words = phrase.split(/\s+/);;
    let shortestWord = words[0];
    for (let word of words) {
        if (word.length < shortestWord.length ) {
            shortestWord = word;
        }
    }
    return(shortestWord)
}

console.log(shortestWord('My cat is cute'))
console.log(shortestWord('Banana is yellow'))

//3
function createPhoneNumber(input) {
    const digits = String(input).replace(/\D/g, '');

    if (digits.length !== 10) {
        return 'Enter correct phone number';
    }

    const part1 = digits.slice(1, 4); // код
    const part2 = digits.slice(4, 7); // первые 3 цифры
    const part3 = digits.slice(7);    // последние 3 цифры

    return `${digits[0]} (${part1}) ${part2}-${part3}`;
}

//4
function findMinMaxInArray(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {min, max};
}

const arrayOfNumbers = [1, 10, 80, 68, 12, 0.5]
console.log(findMinMaxInArray(arrayOfNumbers))

//5
function bubbleSort(arr) {
    // Копируем массив, чтобы не менять оригинальный
    let result = arr.slice();

    let n = result.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (result[i] > result[i + 1]) {
                // Меняем местами
                let temp = result[i];
                result[i] = result[i + 1];
                result[i + 1] = temp;

                swapped = true;
            }
        }
        n--; // После каждой итерации можно не проверять последний элемент
    } while (swapped);

    return result;
}

const numbersToSort = [ 1, 6, 10, 15, 18, 100]
console.log(bubbleSort(numbersToSort))