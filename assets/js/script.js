const creaDiv = document.createElement("div");
creaDiv.id = "ele1";
creaDiv.innerHTML = "Hola";
document.body.appendChild(creaDiv);



// function pintar(el) {
//     el.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", () => pintar(ele));


// function pintar(el,color='green') {
//     el.style.backgroundColor = color
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", () => pintar(ele,'red'));



//-------------------arrow function------------------------

// const pintar=(el)=>el.style.backgroundColor = 'yellow'; 

// const ele = document.getElementById("ele1")
// ele.addEventListener("click", () => pintar(ele));


const pintar=(el,color='green')=>{
    el.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele,'red'));
