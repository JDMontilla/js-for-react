const names = ['David', 'Yessica', 'Julito'];

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    console.log(element)
}

const videoGames = ['Assassins Cred', 'FC 24', 'RE7']
const newvideoGames = ['Vigilante 8', 'Rayman', 'The last of us']

videoGames.forEach(function (name) {
    console.log(name)
})

// Find me busca dentro del arreglo el que sea igual y va comparando y sooo ejecuta la funcion con el que cumple
//  Assasins Cred === 'FC 24' False
//  'FC 24' === 'FC 24' True, cumple la condicion del if 
// 'RE7' === 'FC 24' False     
const gameFound = videoGames.find(function (name) {
    if( name === 'FC 24'){
        return name
    }
})

console.log(gameFound)

//////////////////////////////////////////////////////////
// Me ayuda a filtar de acuerdo a la condicion y me elimina el resto
const game1 = videoGames.filter(function (name) {
    if( name !== 'RE7'){
        return name
    }
})

console.log(game1)
console.log(videoGames.concat(newvideoGames))
console.log([...videoGames, ...newvideoGames])