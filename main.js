"use strict";

// 1

let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// 2

let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > -10 && arr[i] < -3) {
        console.log(arr[i]);
    }
}

// 3


let aray = [];
for (let i = 23; i < 57; i++) {
    aray.push(i);
}
console.log(aray);
let b = 0;
let result = 0;
while (b < aray.length) {
    result += aray[b];
    b++;
}
console.log(result);

// 4

let arrayC = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arrayC.length; i++) {
    let num = String(arrayC[i]);
    if (num[0] == 1 || num[0] == 2 || num[0] == 5) {
        console.log(num);
    }
}

// 5

let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (let i = 0; i < days.length; i++) {
    if (days[i] == 'СБ' || days[i] == 'ВС') {
        document.write(days[i].bold(), " ");
    }
    else {
        document.write(days[i], " ");
    }
}

// 6 

let number = [222, 444, 777];
number[number.length] = 999;
console.log(number);

// 7



// 8

let v = [12, false, "Текст", 4, 2, -5, 0];

v.reverse();
console.log(v);

let i = v.length - 1;
while (i >= 0) {
    console.log(v[i]);
    i--;
}

// 9

let arrayD = [5, 9, 21, , , 9, 78, , , , 6];
let sum = 0;

for (let i = 0; i < arrayD.length; i++) {
    if (arrayD[i] === undefined) {
        console.log(arrayD);
        sum++;
    }
} console.log(sum);

// 10

let arrayF = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
let ind = arrayF.indexOf(0);
let lastInd = arrayF.lastIndexOf(0);
let summ = 0;
for (let i = ind; i < lastInd; i++) {
    if (lastInd < 0) break;
    summ += arrayF[1];
}
console.log(summ);

// 11

let height = Number(prompt('Введите высоту'));
let k = 0;
let j = 0;
let space = " ";
let star = " ";
while (k < height) {
    space = " ";
    star = " ";
    for (j = 0; j < height - k; j++) space += " ";

    for (j = 0; j < 2 * k + 1; j++) star += "^";
    console.log(space + star);
    k++;
}