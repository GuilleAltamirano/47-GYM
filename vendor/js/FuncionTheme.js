// Transformar en Negro
export function modoNoche(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "black"

    let parrafos = document.querySelector("p");
    parrafos.style.color = "white"

    localStorage.setItem("tema", "oscuro");
};

// Transformar en Blanco
export function modoDia(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "white"

    let parrafos = document.querySelector("p");
    parrafos.style.color = "black"

    localStorage.setItem("tema", "claro");
}