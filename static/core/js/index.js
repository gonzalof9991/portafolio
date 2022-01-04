
const crearCafe = () => {
    return `
    
    <img class="img-cafe"  src="https://cdn-icons.flaticon.com/png/128/3037/premium/3037929.png?token=exp=1641255603~hmac=a42fa21e07461265dedda285116ec261" alt="">
    
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