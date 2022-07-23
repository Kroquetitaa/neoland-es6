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

let users2 = users.map( values => values.name );
console.log( users2 );

