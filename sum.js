const numbers = [10, 20, 30, 40, 50, 60, 70];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    sum = sum + element;
}
console.log(sum);

function arrayTotal(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        let element = numbers[i]
        sum = sum + element;
    }
    return sum;
}
const total = arrayTotal([15, 25, 35]);
console.log('array total ', total);