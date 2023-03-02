export {}

function checkPalindrome(g: string) : string {
    const arrayValues = g.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');

    if (g == reverseString) {
        return ('It is a Palindrome')
    }
    else {
        return ('It is not a Palindrome');
    }
}

const g = 'Daniela';

console.log(`${g}: ${checkPalindrome}`);
   