
const crearCafe = () => {
    return `
    
    <img class="img-cafe"  src="https://cdn-icons-png.flaticon.com/512/4151/4151188.png" alt="">
    
    `
} 


let cafes = 0;
const agregarCafe = () => {
    cafes ++;
    let h4 = document.getElementById('h4-cafe');
    let div = document.getElementById('div-cafe');
    h4.innerHTML = `Vasos de cafe por dia : ${cafes}`;
    div.innerHTML += crearCafe();

    if(cafes === 20 ){
        clearInterval(c);
        cafes = 0;
    }
} 



let c = setInterval(agregarCafe,1000);