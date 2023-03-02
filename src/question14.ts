export {}

function trailingZeroes(d: number): number {
    if (d < 5) {
        return 0;
    }
    const quotient = Math.floor(d / 5);
    return quotient + trailingZeroes(quotient);
}

const d = 15;
const amountTrailingZeros = trailingZeroes(d)

console.log(`Trailing zeros in the factorial of ${d} equals to ${amountTrailingZeros}.`);

