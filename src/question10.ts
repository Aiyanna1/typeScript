export {}

function factorial(x: number) :number {
    if (x == 0) {
        return 1;
    }

    else {
        return x * factorial(x - 1)
    }
}

const x = 4;

console.log(`The factorial of ${x} is equal to ${factorial}!`)