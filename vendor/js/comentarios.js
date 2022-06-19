const formulario = document.querySelector('#formulario')
const listaComentario = document.querySelector('#lista-comentarios')

let comentarios = [];

listaComentario.addEventListener('click', borrarComentario)

formulario.addEventListener('submit', agregarComentario)

document.addEventListener("DOMContentLoaded", () => {
    comentarios = JSON.parse(localStorage.getItem('comentarios')) || [];
    renderHTML()
})


function agregarComentario(evt) {
    evt.preventDefault();

    const comentario = document.querySelector('#comentario').value

    if (comentario === '') {
        mostrarError("cualquier mensaje de error")
        return;
    }

    const comentarioObj = {
        id: Date.now(),
        texto: comentario
    }

    comentarios.push(comentarioObj)

    renderHTML()

    formulario.reset()
}


function mostrarError(error){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    const contenido = document.querySelector('#contenido')
    contenido.appendChild(mensajeError);

    setTimeout(()=>{
        mensajeError.remove()
    }, 3000)
}


function renderHTML() {
    limpiarHTML();

    if (comentarios.length > 0) {
        comentarios.forEach(comentario => {
            const btnBorrar = document.createElement('a');
            btnBorrar.classList = "borrar-comentario";

            const li = document.createElement('li');

            li.innerText = comentario.texto
            li.appendChild(btnBorrar)
            li.dataset.comentarioId = comentario.id

            listaComentario.appendChild(li)
        })
    }
    sincroStorage();
}

function sincroStorage() {
    localStorage.setItem('comentarios', JSON.stringify(comentarios))
}


function limpiarHTML() {
    while (listaComentario.firstChild) {
        listaComentario.removeChild(listaComentario.firstChild)
    }
}

function borrarComentario(evt) {
    const id = evt.target.parentElement.dataset.comentarioId
    comentarios = comentarios.filter(comentario => comentario.id != id)
    renderHTML()
}