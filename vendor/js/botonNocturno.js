//importar
import {modoNoche, modoDia} from "./buttonTheme.js"

// Capturar Boton
let boton = document.querySelector("#botonNocturno");

// Capturar Click - Evento
boton.addEventListener("click", function(){
    if (localStorage.getItem("tema") == "oscuro"){
        modoDia();
    } else {
        modoNoche();
    }
});

// Guarda el estado al resfrescar la pagina
document.addEventListener("DOMContentLoaded", function(){
    if (localStorage.getItem("tema") == "oscuro"){
        modoNoche();
    } else {
        modoDia();
    }
})