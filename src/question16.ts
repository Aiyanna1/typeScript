export {}

function squared(a: number, callback: (result: boolean) => void) {
    const result = a * a;
    const ifEven = (result: number): boolean => {
        return result % 2 === 0;
    };
    const resolution = ifEven(result);
    callback(resolution);
}

function whenEven (result: boolean): void {
    if (result) {
        console.log("It is Even.");
    } else {
        console.log("It is odd.");
    }
}

const a = 4;
squared(a, whenEven);
