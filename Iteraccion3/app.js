// 3.1 Dado el siguiente array, crea una copia usando spread operators.
// const pointsList = [32, 54, 21, 64, 75, 43]

const pointsList = [32, 54, 21, 64, 75, 43];

const copiaPointsList = [...pointsList];
console.log( copiaPointsList );

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy};
console.log( copyToy );

// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
// const pointsList = [32, 54, 21, 64, 75, 43];
// const pointsLis2 = [54,87,99,65,32];

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const copyPoints = [...pointsList1, ...pointsLis2];
console.log( copyPoints );

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
// const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const copyToys = {...toy1, ...toyUpdate};
console.log( copyToys );

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.
// const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copyColors = [...colors];
const removeItem = copyColors.splice(2,1);
console.log( copyColors  );

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