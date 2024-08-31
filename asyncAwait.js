async function loadData() {

    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    console.log(data)
    data.results.forEach(function (personaje) {
      const id = document.createElement("h1");
      const h3 = document.createElement("h2");
      const imagen = document.createElement("img");

      const identificador = personaje.id; // Acceder al id del personaje
      const nombre = personaje.name;
      const imagenUrl = personaje.image;

      id.innerText = identificador;
      h3.textContent = nombre;
      imagen.src = imagenUrl;

      document.body.append(id);
      document.body.appendChild(h3);
      document.body.append(imagen);

      imagen.style.borderRadius = "20px";
    });
  }

loadData();
console.log("Linea 2");
