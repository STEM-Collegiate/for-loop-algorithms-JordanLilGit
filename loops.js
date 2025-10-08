// Arrays for testing
const testArrays = [
    [0, 1, 2, 3, 4, 5],              // ascending numbers
    [-2, 4, -6, 8, -10, 12],         // all even numbers
    [1, 3, 5, 7, 9, 11],             // all odd numbers
    [3, -1, 4, 1, 5, -9, 6],         // digits of pi
    [0, 1, undefined, 13, 17],       // undefined values
    [0, 1, null, 13, null]           // null values
];



function sumArray(arr){
    let total = 0;
    for(val of arr){
        total += val;
    }
    console.log("The sum total is: ", total);
    return total;
}

function meanArray(arr){
    let value = 0;
    for(val of arr){
        value += val;
    }
    value = value / arr.length;
    console.log("The average is: ", value);
    return value;
}

function doubleArray(arr){
    const value = arr.map(num => num * 2);
    console.log(value);
    return value;
}

function squareArray(arr){
    const value = arr.map(num => num * num);
    console.log(value);
    return value;
}

function minValue(arr){
    let value = arr[0];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] < value){
            value = arr[i];
        }}
    console.log("The lowest value is: ", value);
    return value;
}

function maxValue(arr){
    let value = arr[0];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] > value){
            value = arr[i];
        }}
        console.log("The largest value is: ", value);
        return value;
}

function countEvens(arr){
    let value = 0;
    for(let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            value += 1;
        }}
        console.log("There are", value, "even numbers");
        return value;
}

function countPositives(arr){
    let value = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            value += 1;
        }}
        console.log("There are", value, "positive numbers");
        return value;
}

function filterOdds(arr){
    const newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            newArray.push(arr[i]);
        }}
        console.log(newArray);
        return newArray;
}

function filterNegatives(arr){
    const newArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            newArray.push(arr[i]);
        }}
        console.log(newArray);
        return newArray;
}

function negativeExists(arr){
    let value = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            value = true;
        }}
        console.log(value);
        return value;
}

function firstEvenNumber(arr){
    let value = null;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            value = arr[i];
            console.log("The first even number is", value);
            return value;
        }}
        console.log("The first even number is", value);
        return value;
}

function allElementsPositive(arr){
    let value = true;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            value = false;
        }else if(arr[i] < 0){
            value = false;
        }else if(arr[i] == null){
            value = false;
        }else if(arr[i] = undefined){
            value = false;
        }}
        console.log(value);
        return value;
}

function allElementsDefined(arr){
    let value = true;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == null){
            value = false;
        }else if(arr[i] = undefined){
            value = false;
        }}
        console.log(value);
        return value;
}
