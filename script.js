// PART 1
// 1.1 Calculate Factorial
function factorial(num){
    var answer = 1;
    while(num != 0){
        answer *= num;
        num--;
    }
    console.log("Answer is: " + answer);
}
factorial(6);
// 1.2 Palindrome Checker
function palindrome(text){
    var palin = true;
    text = text.toLowerCase();
    for(let i = 0; i < text.length / 2; i++){
        if(text[i] != text[text.length - 1 - i]){
            palin = false;
            break;
        }
    }
    console.log(palin);
}
palindrome("sAsSaS");
// 1.3 Array Manipulation
function arrManipulate(array){
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    var sum = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > max) max = array[i];
        if(array[i] < min) min = array[i];
        sum += array[i];
    }
    var average = sum / array.length;
    console.log("Sum: " + sum, "Min: " + min, "Max: "+ max, "Average: " + average);
}
arrManipulate([1,2,3,4,5,6,7,8]);

// 1.4 Reverse a String
function reverse(text){
    var reversedText = "";
    for(let i = text.length - 1; i >= 0; i--){
        reversedText += text[i];
    }
    console.log("REVERSED: " + reversedText);
}
reverse("Abay");

// 1.5 Date Manipulation
function datManipulation(one, two){
    var start = new Date(one);
    var end = new Date(two);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        return "Invalid date";
    }
    var timeDifference = end - start;
    var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    console.log("Difference: " + daysDifference);
}
datManipulation("2015-10-1","2023-10-1");

// 1.6 Basic Algorithm Challenges
function large(arr){
    var largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log("Largest: " + largest);
}
function containsDuplicates(arr) {
    var uniqueSet = new Set(arr);
    console.log("Contains duplicates:", (uniqueSet.size !== arr.length));
}
function findLongestWord(sentence) {
    var words = sentence.split(" ");
    var longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    console.log("Longest word is: " + longestWord);
}
large([1,2,5,8,9,8,5]);
containsDuplicates([1,2,5,8,9,8,5]);
findLongestWord("My name is Mukhammed.");

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);

// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/MmumD/front-end.git
// git push -u origin main