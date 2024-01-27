const keyDiv = document.createElement('div');
  keyDiv.id = 'key';
  keyDiv.style.width = '200px';
  keyDiv.style.height = '200px';
  keyDiv.style.backgroundColor = 'white';
  keyDiv.style.border = '1px solid black';
  document.body.appendChild(keyDiv);
 
 
 // Variable global para almacenar el color
 let currentColor = '';

 // Función para cambiar el color según la tecla presionada
 const changeColor = (event) => {
   if (event.key === 'a') {
    createNewDiv('pink');
   } else if (event.key === 's') {
    createNewDiv('orange');
   } else if (event.key === 'd') {
    createNewDiv('lightblue');
   } else if (event.key === 'q') {
     createNewDiv('purple');
   } else if (event.key === 'w') {
     createNewDiv('gray');
   } else if (event.key === 'e') {
     createNewDiv('brown');
   }

   // Actualizar el color del div "key"
   document.querySelector('#key').style.backgroundColor = currentColor;
 };

 // Función para crear un nuevo div con colores específicos
 const createNewDiv = (color) => {
   const newDiv = document.createElement('div');
   newDiv.style.width = '200px';
   newDiv.style.height = '200px';
   newDiv.style.backgroundColor = color;
   newDiv.style.border = '1px solid black';
   document.body.appendChild(newDiv);
 };

 // Escuchar eventos de teclado
 document.addEventListener('keydown', changeColor);