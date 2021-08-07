const business = 2450;
const minister =  550;
const army = 650;
// const business = prompt()
// const minister =  prompt()
// const army = prompt()


// if (business > minister) {
//     console.log('Business is bigger');
// }
// else{
//     console.log('Minister is bigger');
// }

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    return second;
}

const largest = findLargest(700, 500);
console.log(largest);


// compare 3


/* 
if (business > minister && business > army) {
    console.log('Business is bigger');
}
else if (minister > business && minister > army) {
    console.log('Minister is bigger');
}
else {
    console.log('Army is bigger');
} 
 */


var max = Math.max(business, minister, army);
console.log('largest is ', max);



// find larger number between three normal code
function largeNumber(numberOne, numberTwo, numberThree) {
    if (numberOne > numberTwo && numberOne > numberThree) {
        return numberOne;
    }
    else if (numberTwo > numberOne && numberTwo > numberThree) {
        return numberTwo;
    }
    return numberThree;
}

const  maxLarge = largeNumber(30, 40, 50);
console.log('Max large number ', maxLarge);

// large number code shorthand

function largestNum(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
const findLarge = largestNum(2, 12 ,6);
console.log(findLarge);



// find smallest number between three normal code
function smallestNum(numberA, numberB, numberC) {
    if (numberA < numberB && numberA < numberC) {
        return numberA;
    }
    else if (numberB < numberA && numberB < numberC) {
        return numberB;
    }
    return numberC;
}
var findSmall = smallestNum(200, 120, 600);
console.log(findSmall);


// smallest number shorthand

function smallestNumber(numA, numB, numC) {
    return Math.min(numA, numB, numC);
}
console.log('Smallest number: ', smallestNumber(100, 200, 300));
