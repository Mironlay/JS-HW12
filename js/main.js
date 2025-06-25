// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true
}

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log(user);

const userKeys = Object.keys(user)

for (const key of userKeys) {
    console.log(`${key}: ${user[key]}`);
}



// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. 
// Функція повертає число — кількість властивостей.

const countProps = function (obj) {
    return Object.keys(obj).length;
}

console.log(countProps(user));



// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого 
// (який виконав більше всіх задач). 
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта в 
// форматі "ім'я":"кількість задач".

const employeesList = {
    Олена: 29,
    Андрій: 35,
    Ірина: 1,
    Тарас: 99,
    Марія: 47,
    Дмитро: 53,
    Софія: 22,
    Владислав: 64,
    Катерина: 18
};

const findBestEmployee = function (employees) {
    let maxTasksDone = 0;
    let bestEmployee = '';
    const keys = Object.keys(employees);
    for (let i = 0; i < keys.length; i++) {
        const name = keys[i];
        const tasks = employees[name];
        if (tasks > maxTasksDone) {
            maxTasksDone = tasks;
            bestEmployee = name;
        }
    }
    return bestEmployee;
}
console.log(findBestEmployee(employeesList));







// Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат.
// Функція рахує загальну суму зарплати працівників і повертає її. 
// Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const salaries = {
    Олена: 2500,
    Андрій: 3200,
    Ірина: 1800,
    Тарас: 4000,
    Марія: 2700
};

const countTotalSalary = function (employees) {
    let total = 0;
    const salariesValues = Object.values(employees);
    for (const key of salariesValues) {
        total += key
    }
    return total
}

console.log(countTotalSalary(salaries));




// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. 
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const getAllPropValues = function (arr, prop) {
    const values = [];
    for (const obj of arr) {
        if (prop in obj) {
            values.push(obj[prop]);
        }
    }
    return values;
}

const products = [
    { name: "Радар", price: 1300, quantity: 4 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроїд", price: 400, quantity: 7 },
    { name: "Захват", price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "quantity")); 
console.log(getAllPropValues(products, "price")); 





// Завдання 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName), 
// яка отримує масив об'єктів та ім'я продукту (значення властивості name).
// Повертає загальну вартість продукту (ціна * кількість).
// Викличи функції для перевірки працездатності твоєї реалізації.

const calculateTotalPrice = function (allProdcuts, productName) {
    let total = 0;
    for (const product of allProdcuts) {
        if (productName === product.name) {
            total = product.price * product.quantity; 
        }
    }
    return total
}

console.log(calculateTotalPrice(products, "Радар"));
console.log(calculateTotalPrice(products, "Дроїд")); 
console.log(calculateTotalPrice(products, "Сканер"));
console.log(calculateTotalPrice(products, "Захват"));












