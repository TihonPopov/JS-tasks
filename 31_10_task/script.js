// 1) Создайте объект заработных плат.
//     Назовите userSalaries.
//     Свойствами выступают: Ella, Sophia, Ellie
// Выведите на экран зарплату Ella, Sophia.
//
// 2) Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
// Найдите сумму его элементов.
//
//
// 3) let number;
// if(data === true){
//     number = 3;
// } else{
//     number = 5;
// }
//
// Сделайте рефакторинг кода, с помощью тернарного оператора.



/********1 задание*******/
/*const userSalaries = [
    {
        name: 'Ella',
        salary: '200k',
    },
    {
        name:'Sophia',
        salary: '300k',
    },
    {
      name: 'Ellie',
      salary: '400k',
    },
]
console.log(userSalaries[0].salary);
console.log(userSalaries[1].salary);*/



/********2 задание*******/

/*let objectItems = {
    a : 5,
    b : 6,
    c: 10,
};
let summary = objectItems.a + objectItems.b + objectItems.c;
console.log(summary);

let number;
if(data === true){
    number = 3;
} else{
    number = 5;*/


/********3 задание*******/

let number;
// if(data === true){
//     number = 3;
// } else{
//     number = 5;
let data = 3 > 1;
console.log(data);
number = data ? 3 : 5;
console.log(number);
