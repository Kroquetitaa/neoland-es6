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