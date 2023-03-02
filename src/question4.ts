export {}

function isEven(a: number) :boolean {
    return a % 2 === 0;
}

const a1 = 4;
const a2 = 7;

console.log(`${a1} is even? ${isEven(a1)}`);
console.log(`${a2} is even? ${isEven(a2)}`);