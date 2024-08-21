const createCounter = (a) => {
    return () => {
        a++;
        return a
    }
}
let counter = createCounter(1);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
