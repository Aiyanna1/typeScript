export {}

function callDouble(n: number, f: (n: number) => any): any {
    const double = n*2;
    f(double);
}

function calledOne( n: number): void {
    console.log(n)
}

callDouble(5, calledOne);