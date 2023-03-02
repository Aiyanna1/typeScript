export {}

function powerOfP(n: number, p: number): number {
    if (p === 0) {
        return 1;
    } else if (p === 1) {
        return n;
    } else if (p < 0) {
        return 1 / powerOfP(n, -p);
    } else {
        const result = powerOfP(n * n, Math.floor(p / 2));
        if (p % 2 === 0) {
            return result;
        } else {
            return n * result;
        }        
    }
}

const n = 6;
const p = 3;

const resolution = powerOfP(n,p);

console.log(`${n} to the power of ${p} is ${resolution}.`);