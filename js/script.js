function palindrome(num, count  = 0){
    let str = num.toString();
    let reverseNum = str.split(``).reverse().join(``);

        if (str === reverseNum) {
            return {
                result: num,
                steps: count,
            }
        } 
        return palindrome(num + Number(reverseNum), count+1);

}

console.log(palindrome(545));
console.log(palindrome(94));
console.log(palindrome(5));
console.log(palindrome(96));

