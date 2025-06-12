'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    let length = arr.length
    
    let posCount = 0
    let negCount = 0
    let zeroCount = 0
    
    for (let i = 0; i < length; i++) {
        if (arr[i] < 0) {
            negCount++
        } else if (arr[i] == 0) {
            zeroCount++
        } else {
            posCount++
        }
    }
    
    console.log(Number(posCount / length).toFixed(6))
    console.log(Number(negCount / length).toFixed(6))
    console.log(Number(zeroCount / length).toFixed(6))
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

