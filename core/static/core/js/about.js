
// Componentes

const icono = (id,clase,src) =>{
    
    return `
    
        <img id=${id} class=${clase} src=${src} alt="">
    `
}


const card = (id,clase,func,src,texto) =>{
    return `

    <div class="card ${clase} " id="${id}" onmouseover="hiddEn(${func})"  onmouseout="shoW(${func})" >
            
        
    <img  src= ${src} class="card-img-top " alt="...">
            <div class="card-body" id="card-texto">
                <p class="text">
                   ${texto}
                </p>
            </div>
    </div>
    
    `
}

const divAlien = () => {
    return `
    
    
    <div class="div-alien">
        <img class="img-alien" src="https://cdn-icons.flaticon.com/png/128/3705/premium/3705309.png?token=exp=1640574511~hmac=7a052f22528e6355072ee4b8c48b23f5" alt="">
        <div class ="msg">
            <h6>Sigueme</h6>
        </div>
    </div>
    `
}


// Funciones 

const agregarFuncion = (f) => {
    let div = document.getElementById("divfondo");
    div.innerHTML += f;
}


const iniciar = () =>{
    let div = document.getElementById("divfondo");
    div.innerHTML = '';
    agregarFuncion(card('div-text-1','div-text',2,'https://www.duoc.cl/wp-content/uploads/2020/06/vina-del.mar_.jpg',
    'Estudiante de Ingeniería en Informática en Duoc UC en la sede de Viña Del Mar. Estoy en mi tercer año de carrera, tengo mucha motivación y responsabilidad, me gusta mucho aprender cosas nuevas. Me gusta trabajar en conjunto, soy empático con mis compañeros, compartir ideas e ir entendiendo los pensamientos de los demás.'));  
    agregarFuncion(card('div-text-2','div-text-2',1,'https://i1.wp.com/www.ebizlatam.com/wp-content/uploads/2020/02/Objetivos.jpg?fit=787%2C524','Mis metas personales es llegar a tener la experiencia suficiente para poder ayudar y enseñar a cualquier persona que desee aprender sobre el area de front-end. También algo muy importante para mi es tener una empresa personal y poder desarrollar software de muy buena calidad. Por último, ser un especialista en mi lenguaje preferido que es JavaScript.'))
    agregarFuncion(icono('1','icono','https://cdn-icons-png.flaticon.com/128/5968/5968292.png'))
    agregarFuncion(icono('2','icono-2','https://cdn-icons-png.flaticon.com/128/5968/5968672.png'))
    agregarFuncion(icono('3','icono-3','https://cdn-icons-png.flaticon.com/128/5968/5968242.png'))
    
}

const borrar = () =>{
    let div = document.getElementById("divfondo");
    div.innerHTML = '';
    div.innerHTML = divAlien();
}


let contador = 0
const mostrar = () => {
     contador ++;
     if(contador === 1){
        iniciar();
        
        
     }
     
     
 }

const quitar = () => {
    contador = 0
    borrar()
}



const hiddEn = (p) =>{
    
    if (p === 1) {
        let div = document.getElementById('div-text-1');
        div.style.display = 'none' 
    }
    else{
        let div = document.getElementById('div-text-2');
        div.style.display = 'none' 
    }
    
}


const shoW = (p) =>{
    
    if (p === 1) {
        let div = document.getElementById('div-text-1');
        div.style.display = '' 
    }
    else{
        let div = document.getElementById('div-text-2');
        div.style.display = '' 
    }
    
}

