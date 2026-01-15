// SELECCIONO ELEMENTOS (QUIÉNES)
var detalle = document.getElementById("detalle-proyecto");
var titulo = document.getElementById("titulo-proyecto");
var descripcion = document.getElementById("descripcion-proyecto");
var imagen = document.getElementById("imagen-proyecto");

// ARRAY con info de proyectos
var proyectos = [
  {
    nombre: "Calladium",
    descripcion: "Es un automóvil de energía renovable diseñado específicamente para recorridos dentro del Jardín Nacional de Cuba. Pensado para respetar el entorno natural y adaptarse alclima cálido del país, prioriza la ventilación y la experiencia visual",
    imagenPrincipal: "img/10.png",
    imagenes: ["img/10.png", "img/11.png"]
  },
  {
    nombre: "Disell",
    descripcion: "Disell es un innovador diseño de electrodoméstico creado específicamente para el cuidado y lavado de la ropa interior femenina con ultrasonido, lavado por vibración y luz ultravioleta para desinfectar.",
    imagenPrincipal: "img/14.jpg",
    imagenes: ["img/14.jpg", "img/15.png", "img/16.png"]
  },
  {
    nombre: "Dior",
    descripcion: "La propuesta promueve la sostenibilidad en el lujo, transformando excedentes como el metacrilato de expositores y lona de eventos pasados en un objeto elegante y funcional que refleja los valoresestéticos de Dior",
    imagenPrincipal: "img/19.jpg",
    imagenes: ["img/19.jpg", "img/17.png", "img/18.png", "img/20.jpg", "img/21.jpg", "img/22.jpg"]
  },
  {
    nombre: "Biomad",
    descripcion: "Biomad es un proyecto que propone transformar estos residuos orgánicos en bioplásticos funcionales y biodegradables, ofreciendo una alternativa sostenible y local.",
    imagenPrincipal: "img/23.jpg",
    imagenes: ["img/23.jpg", "img/24.jpg", "img/25.jpg", "img/26.jpg"]
  },
  {
    nombre: "Ánima",
    descripcion: "Ánima es una escultura que representa el umbral entre lo vivo y lo inanimado. Inspirada en las tensiones sutiles entrecrecimiento y deterioro, lo orgánico y lo artificial.",
    imagenPrincipal: "img/1.8.jpg",
    imagenes: ["img/1.8.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"]
  },
  {
    nombre: "Golden",
    descripcion: "El proyecto para Quibaya consistió en crear una solución estética y funcional a una oquedad en sus paredes interiores que comprometía la privacidad entre el espacio reservado y la salaprincipal del restaurante.",
    imagenPrincipal: "img/5.jpg",
    imagenes: ["img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg"]
  },
  {
    nombre: "Monarca",
    descripcion: "La propuesta consiste en un refugio geodésico pensado para situaciones de emergencia, combinando ligereza,resistencia y facilidad de ensamblaje.",
    imagenPrincipal: "img/27.jpg",
    imagenes: ["img/27.jpg", "img/28.jpg", "img/29.jpg", "img/30.jpg"]
  },
  {
    nombre: "Eyes Box",
    descripcion: "Este proyecto consiste en un proyector de estética futurista, eficiente y cómodo uso para espación pequeños.",
    imagenPrincipal: "img/35.png",
    imagenes: ["img/35.png", "img/36.jpeg", "img/37.jpeg", "img/38.jpeg"]
  },
  {
    nombre: "Panels",
    descripcion: "Panels consiste en un conjunto de 3 capas que albergue microorganismos que ayuden a mejorar la calidad del aire en interiores de oficina, estos organismos vivos se alimentan del bioplástico que mantiene la humedad.",
    imagenPrincipal: "img/31.png",
    imagenes: ["img/31.png", "img/33.jpg", "img/34.jpg"]
  }
];

// Variables para navegación de imágenes
var proyectoActual = null;
var indiceImagen = 0;

// FUNCIÓN PRINCIPAL
function mostrarSeccion(id) {

  // Ocultar todas las secciones
  var secciones = document.querySelectorAll('seccion');
  for (var i = 0; i < secciones.length; i++) {
    secciones[i].classList.remove('activa');
  }

  document.getElementById(id).classList.add('activa');
  document.getElementById('menu').classList.remove('activo');
}

function verProyecto(id) {
  mostrarSeccion(id);
}
function cerrarProyecto() {
  mostrarSeccion('portafolio');
}

function hoverMenu(elemento) {
  elemento.style.color = "#f4c430";
}

function normalMenu(elemento) {
  elemento.style.color = "white";
}

function bajarPortafolio() {
  var portafolio = document.getElementById("Portafolio");
  portafolio.scrollIntoView();
}

/* Sobre Mí */
var imagenSobreMi = document.getElementById("imagenSobreMi");
var seccionSobreMi = document.getElementById("sobreMi");

function resaltarImagen() {
  imagenSobreMi.style.transform = "scale(1.1)";
  imagenSobreMi.style.boxShadow = "0px 20px 40px rgba(0,0,0,0.4)";
}

function normalImagen() {
  imagenSobreMi.style.transform = "scale(1)";
  imagenSobreMi.style.boxShadow = "none";
}

function mostrarSobreMi() {
  seccionSobreMi.style.display = "block";
  seccionSobreMi.scrollIntoView();
}

// Función para mostrar el modal con detalles del proyecto
function mostrarProyecto(id) {
  var proyecto = proyectos[id]; // 0-based
  if (!proyecto) return;

  proyectoActual = proyecto;
  indiceImagen = 0;

  document.getElementById('modal-titulo').textContent = proyecto.nombre;
  document.getElementById('modal-descripcion').textContent = proyecto.descripcion;
  actualizarImagenPrincipal();

  var galeria = document.getElementById('modal-galeria');
  galeria.innerHTML = '';
  proyecto.imagenes.forEach(function(imgSrc, index) {
    var img = document.createElement('img');
    img.src = imgSrc;
    img.onclick = function() {
      indiceImagen = index;
      actualizarImagenPrincipal();
    };
    galeria.appendChild(img);
  });

  // Ocultar navbar
  document.querySelector('.navbar').classList.add('modal-open');
  document.body.style.paddingTop = '0';

  document.getElementById('modal-proyecto').style.display = 'block';
}

// Función para actualizar la imagen principal
function actualizarImagenPrincipal() {
  if (proyectoActual && proyectoActual.imagenes[indiceImagen]) {
    document.getElementById('modal-imagen-principal').src = proyectoActual.imagenes[indiceImagen];
  }
}

// Función para cambiar imagen con navegación
function cambiarImagen(delta) {
  if (!proyectoActual) return;
  indiceImagen += delta;
  if (indiceImagen < 0) indiceImagen = proyectoActual.imagenes.length - 1;
  if (indiceImagen >= proyectoActual.imagenes.length) indiceImagen = 0;
  actualizarImagenPrincipal();
}

// Función para cerrar el modal
function cerrarModal() {
  document.getElementById('modal-proyecto').style.display = 'none';
  proyectoActual = null;
  indiceImagen = 0;

  // Restaurar navbar
  document.querySelector('.navbar').classList.remove('modal-open');
  document.body.style.paddingTop = '70px';
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
  var modal = document.getElementById('modal-proyecto');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
