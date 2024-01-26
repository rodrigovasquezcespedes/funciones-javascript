// function pintar(el) {
//     el.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", () => pintar(ele));


// function pintar(el,color='green') {
//     el.style.backgroundColor = color
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", () => pintar(ele,'yellow'));



//-------------------arrow function------------------------

// const pintar=(el)=>el.style.backgroundColor = 'yellow'; 

// const ele = document.getElementById("ele1")
// ele.addEventListener("click", () => pintar(ele));


const pintar=(el,color='green')=>el.style.backgroundColor = color;

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele,'red'));
