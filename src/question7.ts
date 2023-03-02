export {}

function sum(d: number[]) : number {
    let sumTotal = 0;

    for (let i = 0; i < d.length; i++) {
        sumTotal = sumTotal + d[i];
    }
    return sumTotal;
}

const d = [1, 4, 6, 7, 8];

console.log(`The sum of ${d} is: ${sum(d)}`);