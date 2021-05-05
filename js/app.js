// variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// contenedor para el resultado
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto de busqueda
const datosBusqueda = {
     marca: '',
     year: '',
     minimo: '',
     maximo: '',
     puertas: '',
     transmision: '',
     color: ''

};

// eventos
document.addEventListener('DOMContentLoaded', () => {
     mostrarAutos();

     // llena las opciones de año
     llenarSelect();
});

// even listener para los select de busqueda
marca.addEventListener('change', e => {
     datosBusqueda.marca = e.target.value; 

     filtrarAuto();
     
});

year.addEventListener('change', e => {
     datosBusqueda.year = e.target.value; 
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
puertas.addEventListener('change', e => {
     datosBusqueda.puertas = e.target.value; 
     filtrarAuto();
     
});
transmision.addEventListener('change', e => {
     datosBusqueda.transmision = e.target.value; 
     filtrarAuto();
     
});
color.addEventListener('change', e => {
     datosBusqueda.color = e.target.value; 
     filtrarAuto();
     console.log(datosBusqueda);
});



// Funciones
function mostrarAutos(){
     autos.forEach( auto => {
          const autoHTML = document.createElement('p');
          const { marca, modelo, year, puertas, transmision, precio, color} = auto;

          autoHTML.textContent = `
               ${marca} ${modelo} - año: ${year} - ${puertas} puertas - transmision: ${transmision} - precio: ${precio} - Color: ${color}

          `;

          //insertar en el html
          resultado.appendChild(autoHTML);
     })
}

function llenarSelect(){     
     for(let i = max; i > min; i--){
          const sel = document.createElement('option');
          sel.value = i;
          sel.textContent = i;
          year.appendChild(sel);
     }
}

// funcion que filtra en funcion de la busqueda

function filtrarAuto(){
     const resultado = autos.filter( filtrarMarca).filter(filtrarYear);

     console.log(resultado);
}

function filtrarMarca(auto){
     if(datosBusqueda.marca ) {
          return auto.marca === datosBusqueda.marca;
     }
          return auto;
     
}

function filtrarYear(auto){
     if(datosBusqueda.year) {
          return auto.year === parseInt(datosBusqueda.year);
     } 
          return auto;
     

}