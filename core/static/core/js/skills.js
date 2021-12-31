

// Componentes

const card = (src,titulo,porc) => {

    return `
    <div class="col">
        <div class="card card-div" >
            <img class="img-card"  src="${src}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${titulo}</h5>
                <p class="porcentaje">${porc} %</p>
                <div class="barra">
                    <div class="progress"></div>
                </div>
            </div>
        </div>
    </div>
    
    `
}

const seccion = (id,titulo) =>{
    return `
    
    <div>
        <h3 class="h3-div">${titulo}</h3>
        <div class="row" id="${id}">
            
        
            
        </div>
        <hr>
    </div>
    
    
    `
}

// Funciones 

const agregarSeccion = (id,titulo)  =>{
    let main = document.getElementById('main');
    main.innerHTML += seccion(id,titulo);
}

const agregarCard = (sec,src,nombre,porc) =>{
    let seccion = document.getElementById(sec);
    seccion.innerHTML += card(src,nombre,porc);
}


// Seccion 

// 1.- Lenguajes
agregarSeccion('lng','Lenguajes')

agregarCard('lng','https://cdn-icons-png.flaticon.com/128/226/226777.png','Java','70');

agregarCard('lng','https://cdn-icons-png.flaticon.com/128/5968/5968350.png','Python','75');

agregarCard('lng','https://cdn-icons-png.flaticon.com/128/5968/5968292.png','JavaScript','80');

agregarCard('lng','https://cdn-icons-png.flaticon.com/128/174/174854.png','HTML5','80');

agregarCard('lng','https://cdn-icons-png.flaticon.com/128/5968/5968242.png','CSS3','80');

agregarCard('lng','https://www.crakernano.com/img/icon/c-programming.png','C','65');

agregarCard('lng','https://cdn-icons-png.flaticon.com/128/5968/5968381.png','TypeScript','65');


// 2.- Frameworks

agregarSeccion('fram','Frameworks')

agregarCard('fram','https://img.icons8.com/color/2x/django.png','Django','80');
agregarCard('fram','https://img.icons8.com/color/2x/bootstrap.png','Bootstrap','80');
agregarCard('fram','https://img.icons8.com/color/2x/angularjs.png','Angular','70');
agregarCard('fram','https://png.pngtree.com/svg/20170719/ionic_1307248.png','Ionic','75');


// 3.- Databases

agregarSeccion('bd','Database')

agregarCard('bd','https://cdn-icons-png.flaticon.com/128/5969/5969170.png','Oracle','80');
agregarCard('bd','https://cdn-icons-png.flaticon.com/128/919/919836.png','Mysql','70');
agregarCard('bd','https://cdn-icons-png.flaticon.com/128/5968/5968342.png','PostgreSQL','70');

