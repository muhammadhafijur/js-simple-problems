// const myNumber = -5;
// const output = Math.abs(myNumber);
// console.log(output);
// // prints 5

// const myNumber = 21.0001;
const myNumber = 21.5;
// const output = Math.ceil(myNumber);
// const output = Math.floor(myNumber);
// const output = Math.round(myNumber);
const output = Math.random() * 6;
const rounded = Math.round(output);
// console.log(output);
console.log(rounded);
// prints 22 for ceil
// prints 21 for floor
// round will make 22 if it hits .5 or upper, 21 if it is up to .4
// round will go to nearest closest

for(let i = 0; i <= 20; i++) {
    const randomNumber = Math.random() * 6;
    const roundNumber = Math.round(randomNumber);
    console.log(roundNumber);
}