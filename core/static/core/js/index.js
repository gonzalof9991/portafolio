
const crearCafe = () => {
    return `
    
    <img class="img-cafe"  src="https://cdn-icons-png.flaticon.com/128/434/434804.png" alt="">
    
    `
} 


let cafes = 0;
const agregarCafe = () => {
    cafes ++;
    
    let div = document.getElementById('div-cafe');
    
    div.innerHTML += crearCafe();

    if(cafes === 10 ){
        clearInterval(c);
        cafes = 0;
    }
} 



let c = setInterval(agregarCafe,1000);