'use strict'
/*
1) Дан массив с элементами [1, 2, 3, 4, 5].
    С помощью цикла for найдите сумму элементов этого массива.
    Запишите ее в переменную result.
 */
// const numbers = [1, 2, 3, 4, 5];
// let result = 0;
// for(let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
// }

//console.log(result); //15

/*2) Дан массив с числами.
    Числа могут быть положительными и отрицательными.
    Найдите сумму положительных элементов массива.*/
// const num = [1,3,5,4,8,-2,-5,-8,-12,-20];
// let sumOfPositNum = 0;
// for(let i = 0; i<num.length; i++) {
//     if(num[i] > 0) {
//         sumOfPositNum  += num[i];
//     }
// }
//console.log(sumOfPositNum); //21

/*3) Дан массив с элементами [1, 2, 5, 9, 4, 13, 4, 10].
    С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4.
Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.*/
// const array = [1, 2, 5, 9, 4, 13, 4, 10];
// for(let i = 0; i < array.length ; i++) {
//     if(array.includes(4)){
//         alert('Есть!');
//         break;
//     }
// }

/*4) Дан массив с элементами ['Привет, ', 'мир', '!']. Необходимо
записать в переменную text фразу 'Привет, мир!',
    а затем вывести на экран содержимое этой переменной.*/
// const phrase = ['Привет, ', 'мир', '!'];
// let text = '';
// text = `${phrase.slice(0,1)} ${phrase.slice(1,2)} ${phrase.slice(2,3)}`;
// alert(text);

/*
5) Даны два массива: ['a', 'b', 'c']
и [1, 2, 3]. Объедините их вместе.*/
// const letters = ['a', 'b', 'c'];
// const numbers = [1, 2, 3];
// const finalArray = letters.concat(numbers);
// console.log(finalArray);


/*6) Дан массив ['a', 'b', 'c'].
    Добавьте ему в начало элементы 1, 2, 3.
И отдельно добавьте в конец массива 1,2,3*/
//let letters = ['a', 'b', 'c'];
//letters.unshift(1,2,3);
//letters.push(1,2,3);
//console.log(letters);
/*
7) Создайте массив ['a', 'b', 'c', 'd']
и с его помощью выведите на экран строку 'a+b, c+d'.*/
// let array = ['a', 'b', 'c', 'd'];
// let text = '';
// text = `${array[0]}+${array[1]}, ${array[2]}+${array[3]}`;
// console.log(text);

/*
8) Дан массив [1, 2, 3, 4, 5].
    С помощью метода slice запишите в новый элементы [1, 2, 3].
*/
// let numbers = [1, 2, 3, 4, 5];
// let newArr = numbers.slice(0,3);
// console.log(newArr);

/*9) Дан массив [1, 2, 3, 4, 5].
    С помощью метода splice преобразуйте массив в [1, 4, 5].*/
// let array = [1, 2, 3, 4, 5];
// let newArray = array.splice(1,2);
// console.log(array);

/*10) Дан массив [1, 2, 3, 4, 5].
    С помощью метода splice сделайте из него массив
    [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/
// let numbers = [1, 2, 3, 4, 5];
//  numbers.splice(1, 0,'a','b');
//  numbers.splice(6, 0,'c');
//  numbers.splice(8, 0, 'e');
// console.log(numbers);

/*
11) Дан массив ['js', 'css', 'jq'].
    Выведите на экран первый элемент и отдельно последний элемент.
    Используйте shift, pop.
*/
let array = ['js', 'css', 'jq'];
//pervyi variant
console.log(array.shift());
console.log(array.pop());
//Vtoroi variant
let [number1, number2, number3] = ['js', 'css', 'jq'];
console.log(number1);
console.log(number3);