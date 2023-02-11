console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
removedItem = supplyChanges.pop();
console.log(removedItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');

for (let x = 0; x < supplyChanges.length; x++) {
    console.log('Showing supplyChanges..', supplyChanges[x]);
    if (supplyChanges[x] > 0) {
        console.log('Added ', supplyChanges[x], ' parts');
    } else if (supplyChanges[x] === 0) {
        console.log('No Change.');
    } else {
        console.log('Removed ', supplyChanges[x], ' parts');
    }
}



// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for (let changes of supplyChanges) {
    console.log("Showing changes:", changes);
    if (changes > 0) {
        console.log('Added ', changes, ' parts');
    } else if (changes === 0) {
        console.log('No Change.');
    } else {
        console.log('Removed ', changes, ' parts');
    }
}


// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');
let sum = 0;
for (let i = 0; i < supplyChanges.length; i++) {
    sum = sum + supplyChanges[i];
}
console.log(sum);


// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');
boxes = 0
parts = 572
min = 7

// partsTwo = parts-7
// console.log(partsTwo)

while (parts > 7) { //as long as there is at least 7 parts, add parts to boxes. as soon as we have less than 7 parts, stop the loop.
    //console.log(parts); //tell me how many parts we're starting with in this iteration. use this line to check to make sure parts are going down by 7 every time.
    parts = parts - 7 //remove 7 parts from parts
    boxes++ //add one box
    //console.log(boxes) //tell me how many boxes we have now, after this iteration. use this to double check that it's only adding 1 every time.
}
console.log("The number of boxes at the end is: " + boxes) //when the loop stops, tell me how many boxes we have made
console.log("The number of parts left over is: " + parts) // when the loop stops, tell me how many parts are reamining
//console.log(572 / 7) //expected # of boxes total