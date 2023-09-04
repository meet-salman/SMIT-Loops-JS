const div = document.querySelector('div');

// for (let i = 1; i <= 10; i++) {
//     // console.log("6 * " + i + " = " + i*6);
//     // console.log(`6 * ${i} = ${i * 6}`);
//     div.innerHTML += (`6 * ${i} = ${i * 6} <br />`);
// }


// const num = +prompt("Enter Number");

// let start = +prompt('Enter Starting Table');
// let end = +prompt('Enter Ending Table');

// for (let i = start; i <= end; i++) {
//     // div.innerHTML += (`${num} * ${i} = ${i * num} <br />`);
//     div.innerHTML += (`<br />`);

//     for (let j = 1; j <= 10; j++) {
//         div.innerHTML += (`${i} * ${j} = ${i * j} <br />`);
//     }
// }




// const fruits = ['banana', 'apple', 'orange', 'peach', 'mango'];
// // console.log(fruits.indexOf('apple'));

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${fruits[i]} at index ${fruits.indexOf(fruits[i])}`);

// }




// const myName = "salman ahmed shaikh";
// console.log(myName.toUpperCase());

// const newName = myName.split(' ');
// console.log(newName);



// const numbers = [3, 6, 9, 45, 88, 24, 38, 9, 56, 72, 67, 44, 12, 2, 7];

// for (let i = 0; i < numbers.length; i++) {

//     if (numbers[i] % 2 == 0) {
//         console.log(numbers[i]);
//     }
// }



// const arr = [12, 13, 13, 14, 15, 15, 16, 17, 17, 18];

// let newArr = [...new Set(arr)];
// console.log(newArr);






// const num = 2;
// const power = 3;

// for (let i = num; i <= power; i++) {
//     console.log(i * num);

// }



// const fruit = 'orange';
// const fruits = ['banana', 'apple', 'orange', 'peach', 'mango'];

// let newFruits = [];

// newFruits.indexOf(fruits(2));
// newFruits.push(fruits[2]);
// console.log(newFruits);


// for (let i = 0; i < fruits.length; i++) {
//     if (fruit == fruits[i]) {
//         console.log(`${fruit} is available`);
//         break
//     } else {
//         console.log(`${fruit} is not available`);
//     }

// }







// ADD ALL NUMBERS IN ARRAY

// let numbers = [5, 3, 2, 9, 1];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     sum = numbers[i] + sum;
// }
// console.log(sum);


// MULTIPLY ALL NUMBERS IN ARRAY

// let numbers = [5, 3, 2, 9, 1];
// let sum = 1;

// for (let i = 0; i < numbers.length; i++) {
//     sum = numbers[i] + sum;
// }
// console.log(sum);







// FIND LARGEST NUMBERS


// const numbers = [3, 6, 9, 45, 88, 24, 38, 99, 117, 56, 72, 67, 44, 12, 2, 7];
// let largest = [];


// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }
// console.log(largest);




// FIND SMALLEST NUMBERS


// const numbers = [3, 6, 9, 45, 88, 24, 38, 99, 117, 56, 72, 67, 44, 12, 2, 7];
// let largest = [];


// for (let i = 0; i < numbers.length; i++) {
//     largest = [];
//     largest.push(numbers[i]);

//     for (let j = 1; j < numbers.length; j++) {
//         if (numbers[j] < largest) {
//             largest = numbers[j];
//         }
//     }
// }
// console.log(largest);








// PRINT NUMBERS IN REVERSE

// for (let i = 10; i >= 0; i--) {
//     console.log(i);

// }



// PRINT EVEN NUMBERS

// for (let i = 1; i <= 20 ; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }



// PRINT ODD NUMBERS

// for (let i = 1; i <= 20 ; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }



// PRINT SERIES OF THOUSANDS (2k, 4k, 6k, 8k, 10k   )

// for (let i = 2000; i <= 200000; i++) {
//     if (i % 2000 == 0) {
//         console.log(i);
//     }

// }


// for (let i = 1; i <= 20 ; i++) {
//         if (i % 2 == 0) {
//             console.log(`${i}K`);
//         }
//     }







// FIND THE ITEM IS AVAILABLE IN GIVEN ARRAY?


// const fruits = ['apple', 'avocado', 'banana', 'blueberry', 'cherry', 'coconut', 'dates', 'grapes', 'grapefruit', 'guava', 'mango', 'watermelon', 'pineapple', 'peach', 'papaya', 'orange', 'kiwi'];

// let fruit = prompt("Chaccha ke thelay pe ap ka Suagat hy! Aap kya lena Pasand kry gy?").toLowerCase();

// for (let i = 0; i < fruits.length; i++) {

//     if (fruits[i] == fruit) {
//         console.log(`${fruit} is Available at index ${fruits.indexOf(fruit)}`);
//         break
//     }
    
//     else{
//         console.log(`${fruit} is not Available`);
//     }
    
// }






// FIND NUMBERS MULTIPLE OF 5 IN RANGE 1 - 100


// for (let i = 0; i <= 100; i++) {
    
//     if (i % 5 == 0) {
//         console.log(i);
//     }
    
// }

























































