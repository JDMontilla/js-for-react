const user = {
    name: 'David',
    age: 30
}

function printInfo({name}){
    return '<h1>Hola ' + name + '</h1>'
}

document.body.innerHTML = printInfo(user)

console.log(printInfo(user));

/////////////////////////////////////////////////

const usuario = {
    firstName: 'Joe',
    lastName: 'Doe',
    country: 'Colombia',
    twitter: '@joeDoe'
}
const firstName1 = usuario.firstName
const lastName1 = usuario.lastName


const { firstName, lastName, twitter } = usuario // Otro ejemplo mas facil

console.log(firstName,lastName, twitter)

///////////////////////////////////////////////////

const numeros = [1, 2, 3, 4, 5];

// Destructuring con rest operator
const [primero, segundo, ...resto] = numeros;

console.log(primero);  // 1
console.log(segundo);  // 2
console.log(resto);    // [3, 4, 5]