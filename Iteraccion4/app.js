// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
// const users = [
// 	{id: 1, name: 'Abel'},
// 	{id:2, name: 'Julia'},
// 	{id:3, name: 'Pedro'},
// 	{id:4, name: 'Amanda'}
// ];

const users = [
    {id: 1, name: 'Abel'},
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'},
    {id:4, name: 'Amanda'}
];

let newUsers = users.map( values => values.name );
console.log( newUsers );

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
// const users = [
// 	{id: 1, name: 'Abel'},
// 	{id:2, name: 'Julia'},
// 	{id:3, name: 'Pedro'},
// 	{id:4, name: 'Amanda'}
// ];

const users3 = [
   {id: 1, name: 'Abel'},
   {id:2, name: 'Julia'},
   {id:3, name: 'Pedro'},
   {id:4, name: 'Amanda'}
];

const newList = users3.map( value => ( value.name.startsWith('a'.toUpperCase()) ) ? 'Anacleto' : value.name );
console.log( newList );

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
// const cities = [
// 	{isVisited:true, name: 'Tokyo'}, 
// 	{isVisited:false, name: 'Madagascar'},
// 	{isVisited:true, name: 'Amsterdam'}, 
// 	{isVisited:false, name: 'Seul'}
// ];

const cities = [
   {isVisited:true, name: 'Tokyo'}, 
   {isVisited:false, name: 'Madagascar'},
   {isVisited:true, name: 'Amsterdam'}, 
   {isVisited:false, name: 'Seul'}
];
cities.map( value => (value.isVisited === true) ? value.isVisited = 'Visitado' : value.isVisited = 'No visitado');
console.log( cities );