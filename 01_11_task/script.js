// 1) У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
//    С помощью цикла надо найти сумму элементов этого массива.

// 2) Создайте массив с различными числами. Должно быть как минимум 10 элементов 
//    внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива. 
//    Квадрат числа 5 будет 25.

// 3) Имеется массив с элементами 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
//    Нужно найти перебирая эти элементы с помощью цикла четные числа.
//    И эти найденные четные числа должны быть собраны в одном массиве.



// ******* 1е задание******

const numbers = [1,2,5,6,88,5];
let summary = 0;
for ( let i = 0; i < numbers.length; i++){
    summary += numbers[i];
}
console.log(summary);



// ******* 2е задание******

const anotherNumbers = [1,2,3,4,5,6,7,8,9,10];
let summaryKvadrat = 0;
for ( let i = 0; i < anotherNumbers.length; i++){
    summaryKvadrat += anotherNumbers[i]*anotherNumbers[i];
}
console.log(summaryKvadrat);

// ******* 3е задание******

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let odd = 0;
for( let i = 0; i < array.length; i++){
   if ((array[i]%2) === 0) {
    // console.log(array[i]);
    const newArray = [];
    newArray.push(array[i]);
    console.log(newArray);
   } 
}
