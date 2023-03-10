/* -------------------------------------------------------------------------- */
/*                        [4] FUNCION: marcar favorito                        */
/* -------------------------------------------------------------------------- */
// - buscar el album por id en el array 
// - cambiar el estado del like
// - volver a renderizar
function marcarFavorito() {
    // seleccionamos todos lo botones de like
    const botonesLike = document.querySelectorAll('.fa-heart');

    botonesLike.forEach(boton => {
        // ๐ por cada boton escuchamos su click
        boton.addEventListener('click', function () {
            console.log(boton.id);

            // recorreremos el listado de albumes
            albumesFamosos.forEach(album => {
                // si encontramos al que coincide con el boton apretado,
                // le cambiamos la propiedad like por lo contrario
                if (album.id === boton.id) {
                    album.like = !album.like;
                }
            })

            //๐ post click debemos renderizar nuevamente las tarjetas
            renderizarAlbumes(albumesFamosos);
            //๐ post click debemos agregar el listener a cada nuevo boton otra vez ya que el renderizado eliminรณ lo anterior
            marcarFavorito();
        })
    })

}
marcarFavorito()



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */
// Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
// preguntar al usuario cual quiere eliminar.
// Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.
// 1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
// presiona la tecla f
// 2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
// para que ingrese el nombre del album que desea eliminar
// 3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
// 4- Si la busqueda nos da un resultado vรกlido, procedemos a borrar el objeto del array
// 5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito para que 
//sean nuevamente aplicadas.

// function eliminarAlbum() {
//     // desarrollar la funciรณn ๐


// }
// eliminarAlbum();

// POSIBLE SOLUCIรN:

function eliminarAlbum() {
window.addEventListener('keydown', (e) => {
console.log(e);
if (e.key === 'f') {
const album = prompt('ยฟQue album desea eliminar?')

const posicionBuscado = albumesFamosos.findIndex(obj => obj.nombre === album)

// si fue encontrado el nombre del album..
if (posicionBuscado !== -1) {
// ๐eliminamos elemento
albumesFamosos.splice(posicionBuscado, 1)


//๐ post click debemos renderizar nuevamente las tarjetas
renderizarAlbumes(albumesFamosos);
//๐ post click debemos agregar el listener a cada nuevo boton otra vez ya que el renderizado eliminรณ lo anterior
marcarFavorito();
}
}
})

}
eliminarAlbum();