// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

console.log( ages.filter( numbers => numbers >= 18) )

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
// const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

console.log( ages2.filter( numbers => (numbers % 2 == 0)) )

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
// const streamers = [
// 	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
// 	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
// 	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
// 	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
// ];

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

console.log( streamers.filter( streams => (streams.gameMorePlayed === 'League of Legends')));