
//вывод в консоль массива
//let array = [5];
//let array2= new Array(5);
//console.log(array);
//console.log(array2);

                //0,       1
//let fruits = ['Яблоко', 'Апельсин'];
//console.log(fruits[1]);
//fruits[0] = 'Груша';
//console.log(fruits);

let fruits = [
    {
        name: 'Яблоко',
        count: 8,
    },
    {
        name: 'Апельсин',
        count: 6,
    },
    {
        name: 'Киви',
        count: 10,
    },
];

//найти элемент в массиве
const orange = fruits.findIndex((item) => item.name === 'Апельсин');
fruits[orangeIndex]
console.log(orangeIndex);