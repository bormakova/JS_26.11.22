
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

//Создать новый массив где кол-во к-ых <10
//метод filter
//const fruitsForOrder = fruits.filter((fruit) => fruit.count < 10);
//console.log(fruits);
//console.log(fruitsForOrder);

//увеличить кол-во фруктов на 10
fruits = fruits.map((item) =>{
    item.count = item.count + 10;
    return item
});
console.log(fruits); 