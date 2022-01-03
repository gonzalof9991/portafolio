

let pasos = 0;
const iniciarViaje = () => {
   
    let gonza = document.getElementById('gonzalo');
    let texto = document.getElementById('texto');
    let icono = document.getElementById('icono');
    pasos ++;
    gonza.style.left = pasos + '%';
    if (pasos === 35 ){
        
        texto.innerHTML = 'Titulo Analista Programador';
        icono.style.opacity = '1'
        
    }
    else if(pasos == 65){
        icono.src = 'https://cdn-icons-png.flaticon.com/128/3534/3534033.png';
        clearInterval(c);
        texto.innerHTML = 'Ingenieria en proceso...';
        
    }
    
    
} 



let c = setInterval(iniciarViaje,100)