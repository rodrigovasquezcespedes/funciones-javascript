const creaDiv = document.createElement("div");
creaDiv.id = "ele1";
creaDiv.innerHTML = "ejercicio 2.2";
creaDiv.style.margin="20px";
creaDiv.style.padding="20px";
document.body.appendChild(creaDiv);


//-------------------ejercicio 2.2------------------------
// function pintar(el) {
//     el.style.backgroundColor = 'yellow'
// }
// const ele = document.getElementById("ele1")
// ele.addEventListener("click", () => pintar(ele));



const pintar=(el)=>el.style.backgroundColor = 'yellow'; 

const ele = document.getElementById("ele1")
ele.addEventListener("click", () => pintar(ele));


//-------------------ejercicio 2.3------------------------
const creaDiv2 = document.createElement("div");
creaDiv2.id = "ele2";
creaDiv2.innerHTML = "ejercicio 2.3";
creaDiv2.style.margin="20px";
creaDiv2.style.padding="20px";
document.body.appendChild(creaDiv2);

// function pintar1(el1,color='green') {
//     el1.style.backgroundColor = color;
// }
// const ele1 = document.getElementById("ele2");
// ele1.addEventListener("click", () => pintar1(ele1,'yellow'));


const pintar1=(el1,color='green')=>el1.style.backgroundColor = color;

const ele1 = document.getElementById("ele2");
ele1.addEventListener("click", () => pintar1(ele1,'yellow'));
