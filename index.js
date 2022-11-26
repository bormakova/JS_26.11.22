
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

const func1 = (item) => item.count += 10;
const func2 = function(item) {
    item.count +=10;
}

function func3(item) {
    item.count +=10;
}

fruits.forEach(func1); 
console.log(fruits);

const array = [1,2,3,4,5];
const sum = array.reduce((acc, current) => acc + current, )

const array = [1,2,-3,-4, 5, 8, 4];

const sumEvenPositivNumber1 = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > 0 && element %2 === 0) {
            sum =+ element;
        } 
        return sum;
    }

};

console.log(sumEvenPositivNumber1);

const sumEvenPositivNumber3 = (array) => array.reduce(() => )
    ? return acc + element
}