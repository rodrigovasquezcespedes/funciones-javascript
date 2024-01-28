//crea un div contenedor para centrar los cuadrados
const contenedor = document.createElement("div");
contenedor.style.display = "flex";
contenedor.style.justifyContent = "center";
contenedor.style.alignItems = "center";
contenedor.style.padding = "20px";
document.body.appendChild(contenedor);


//crea un el primer div
const keyDiv = document.createElement('div');
keyDiv.id = 'key';
keyDiv.style.width = '200px';
keyDiv.style.height = '200px';
keyDiv.style.backgroundColor = 'white';
keyDiv.style.border = '1px solid black';
contenedor.appendChild(keyDiv);

// Variable global
let colorSeleccionado = '';

// Cambiar el color del div
const cambiarColor=()=> {
  document.getElementById('key').style.backgroundColor = colorSeleccionado;
}

// Función para manejar el evento de presionar una tecla
const Tecla=(event)=> {
  if (event.key === 'a') {
    colorSeleccionado = 'pink';
  } else if (event.key === 's') {
    colorSeleccionado = 'orange';
  } else if (event.key === 'd') {
    colorSeleccionado = 'lightblue';
  } else if (event.key === 'q') {
    creanuevoDiv('purple');
  } else if (event.key === 'w') {
    creanuevoDiv('gray');
  } else if (event.key === 'e') {
    creanuevoDiv('brown');
  }
  //llama a la funcion 
  cambiarColor();
}

// Agregar un event listener para el evento de presionar tecla
document.addEventListener('keydown', Tecla);



// Función para crear un nuevo div con colores específicos
const creanuevoDiv = (color) => {
  const newDiv = document.createElement('div');
  keyDiv.style.display = 'block'
  newDiv.style.width = '200px';
  newDiv.style.height = '200px';
  newDiv.style.backgroundColor = color;
  newDiv.style.border = '1px solid black';
  contenedor.appendChild(newDiv);
};
//appendChild crea un nodo hijo (body.contenedor  y luego el nodo hijo de contenedor.div).
//createElement es un método que se utiliza para crear un nuevo elemento del DOM.
//addEventListener es un método que se utiliza para asignar un "escuchador de eventos" (click,dblclick,etc)