// 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
// del objeto usando object destructuring e imprimelas por consola. Cuidado, 
// no hace falta hacer destructuring del array, solo del objeto.
// const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const { title, gender, year } = game;
console.log( title, gender, year );

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.
// const fruits = ['Banana', 'Strawberry', 'Orange'];

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3 ] = fruits;
console.log( fruits );