const div = document.querySelector('div');

// for (let i = 1; i <= 10; i++) {
//     // console.log("6 * " + i + " = " + i*6);
//     // console.log(`6 * ${i} = ${i * 6}`);
//     div.innerHTML += (`6 * ${i} = ${i * 6} <br />`);
// }


// const numbers = [5, 6, 8, 3, 11, 23, 17, 27];
// // let num1 = numbers.indexOf(11);
// // console.log(num1);

// if (numbers[4] == 11) {
//     console.log("Number hy ga");

// } else {
//     console.log("Number nhi hy");
// }


const input = document.querySelector('#number');
const submit = document.querySelector('#submit');

// const num = +prompt("Enter Number");


// for (let i = 1; i <= 10; i++) {
//     // div.innerHTML += (`${num} * ${i} = ${i * num} <br />`);
//     div.innerHTML += (`<br />`);

//     for (let j = 1; j <= 10; j++) {
//         div.innerHTML += (`${i} * ${j} = ${i * j} <br />`);

//     }

// }







function table() {
    if (input.value > 0) {
        for (let i = 1; i <= 10; i++) {
            div.innerHTML += (`${input.value} * ${i} = ${i * input.value} <br />`);
        }

    } else {
        alert("Invalid Number")
    }

}






















