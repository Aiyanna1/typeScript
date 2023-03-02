export {}

function stringReverse(str: string) : string{
    let reversed = '';
    
    for (let i = str.length; i >= 0; i--) {
        reversed += str.charAt(i-1);
    }
    return reversed
}

const stringToReverse = 'abcdefghij';
console.log(`The string '${stringToReverse}' in reverse is '${stringReverse(stringToReverse)}'`);