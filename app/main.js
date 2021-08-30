// variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const  resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    // llena los años
    llenarSelect();

    // haquear carro para antony
    const card = document.querySelector('.card');
});

// generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

// event listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', e=>{
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});


// funciones
function mostrarAutos(autos){

    limpiarHTMML(); //Elimina el HTML previo

    autos.forEach(auto => {
        const autoHTML = document.createElement('div')
        autoHTML.classList.add('card');
        
        autoHTML.innerHTML = `
        <div class = "card_img">
            <img src= ${auto.img}>
        </div>
        <div class="card_info">
            <h3>Caracteristicas</h3>
            <p><span class="negrita">marca</span>: ${auto.marca}<br>
            <span class="negrita">modelo</span>: ${auto.modelo}<br>
            <span class="negrita">year</span>: ${auto.year}
            <span class="negrita">precio</span>: ${auto.precio}<br>
            <span class="negrita">puertas</span>: ${auto.puertas} <span class="negrita">color</span>: ${auto.color}<br>
            <span class="negrita">transmision</span>: ${auto.transmision}</p>
        </div>
        `
        // insertar en el html
        resultado.appendChild(autoHTML)
    });
};

// limpiar html
function limpiarHTMML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

// llenar select
function llenarSelect(){
    
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //agrega las opciones de año al select
    };
};

// funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    mostrarAutos(resultado);
};

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(datosBusqueda.marca){
        return auto.marca === marca;
    }
    return auto;
};

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(datosBusqueda.year){
        return auto.year === year;
    }
    return auto;
};

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
};

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
};

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto;
};

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    };
    return auto;
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    };
    return auto;
}

