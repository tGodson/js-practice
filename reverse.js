var string = "Today is a good day!";

var reverseSentence = reverseBySeparator(string, "");
var reverseWord = reverseBySeparator(reverseSentence, " ");

function reverseBySeparator(str, separator) {
    return str.split(separator).reverse().join(separator);
}
console.log(reverseWord);