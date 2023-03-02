export {}

function factorial (x: number) : number {
    if (x === 0) {
        return 1;
    }
    else {
        return x * factorial(x -1);
    }
}

const y = 3;

if ( y > 0) {
    let result = factorial(y);

    console.log(`The factorial of ${y} is ${result}!`);
}