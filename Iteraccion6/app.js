// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
// const numbers = [32, 21, 63, 95, 100, 67, 43];

const numbers = [32, 21, 63, 95, 100, 67, 43];

console.log( numbers.find( e => e === 100));

// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
// const movies = [
// 	{title: 'Madagascar', stars: 4.5, date: 2015},
// 	{title: 'Origen', stars: 5, date: 2010},
// 	{title: 'Your Name', stars: 5, date: 2016}
// ];

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

console.log( movies.find( value => value.date === 2010) );