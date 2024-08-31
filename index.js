const h2 = document.createElement('h2')
h2.innerText = 'prueba de h2 en el body'

const boton = document.createElement('button')
boton.innerText = 'JS for React'

boton.addEventListener('click', function(){
    h2.innerText = 'Texto actualizado con JS'
    setTimeout(function() {
        window.open('https://www.youtube.com/watch?v=lVqHiTCIRQg&t=1376s', '_blank');
    }, 2000); 
    console.log('Abriendo una nueva pestaña en YouTube')
})

document.body.append(h2)
document.body.append(boton)