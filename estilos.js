const background = '#304070'
const color = 'white'
const isAuthorized = true

const boton = document.createElement('button');
boton.innerText = 'Ir a YouTube'

boton.style = `background: ${isAuthorized ? background : 'green'}; 
color: ${isAuthorized ? color : 'dark'};`

document.body.append(boton)