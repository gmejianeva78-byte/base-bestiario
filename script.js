// Listas de imágenes
const listaCabezas = [
  "../base-bestiario/assets/img/arnold 1.webp",
  "../base-bestiario/assets/img/arnold 2.webp",
  "../base-bestiario/assets/img/arnorld 3.png",
];
const listaTroncos = [
 "../base-bestiario/assets/img/back 1.webp",
  "../base-bestiario/assets/img/back 2.webp",
  "../base-bestiario/assets/img/back 3.webp",
];
const listaPatas = [
  "../base-bestiario/assets/img/escubi 1.webp",
  "../base-bestiario/assets/img/escubi 2.webp",
  "../base-bestiario/assets/img/escubi 3.png",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const patas = document.getElementById("patas");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let patasAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  troncoAleatorio = numeroAleatorio(0, listaTroncos.length);
  patasAleatorio = numeroAleatorio(0, listaPatas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCabezas[cabezaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  tronco.src = `${listaTroncos[troncoAleatorio]}`;
  patas.src = `${listaPatas[patasAleatorio]}`;

  console.log(cabezaAleatorio, troncoAleatorio, patasAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
