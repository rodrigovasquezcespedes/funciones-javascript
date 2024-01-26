
const contenedor = document.createElement("div");
contenedor.style.display = "flex";
contenedor.style.justifyContent = "center"; 
contenedor.style.alignItems = "center"; 
document.body.appendChild(contenedor);


const crearDiv = (color, id) => {
    const div = document.createElement("div");
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.backgroundColor = color;
    div.style.margin = "10px";
    div.id = id;
    contenedor.appendChild(div);
    div.addEventListener("click", () =>div.style.backgroundColor = "black");
};

crearDiv("blue", "divAzul");
crearDiv("red", "divRojo");
crearDiv("green", "divVerde");
crearDiv("yellow", "divAmarillo");

//appendChild crea un nodo hijo (body.contenedor  y luego el nodo hijo de contenedor.div).
//createElement es un método que se utiliza para crear un nuevo elemento del DOM.
//addEventListener es un método que se utiliza para asignar un "escuchador de eventos" (click,dblclick,etc)