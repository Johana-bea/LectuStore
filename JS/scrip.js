// function toggleMenu() {
//   const menu = document.getElementById('menu');
//   menu.classList.toggle('active');
// }
// *********************************************************
// const menu_mobil = document.getElementById('menu-mobil');
// const menu = document.getElementById('menu');

// menu_mobil.addEventListener('click', () => {
//   menu.classList.toggle('active');
// })
// **********************************************************
// function moverCarrusel(direccion) {
//   const carrusel = document.getElementById('carrusel');
//   const tarjeta = carrusel.querySelector('.tarjeta');
//   const desplazamiento = tarjeta.offsetWidth + 20;
//   carrusel.scrollBy({
//     left: direccion * desplazamiento,
//     behavior: 'smooth'
//   });
// }

// ***********************************************************
// function moverSliderEditoriales(direccion) {
//   const slider = document.getElementById('slider-editoriales');
//   const item = slider.querySelector('.editorial-logo-item');
//   const desplazamiento = item.offsetWidth + 40;
//   slider.scrollBy({
//     left: direccion * desplazamiento,
//     behavior: 'smooth'
//   });
// }
// *****************************************************************

document.getElementById("form-opinion").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = this.nombre.value;
    const ciudad = this.ciudad.value;
    const comentario = this.comentario.value;
    const calificacion = this.calificacion.value;

    const nuevaOpinion = document.createElement("div");
    nuevaOpinion.className = "opinion";
    nuevaOpinion.innerHTML = `
        <div class="icono-usuario">👤</div>
        <div class="contenido-opinion">
            <p><strong>${nombre} – ${ciudad}</strong><br><small>Opinión reciente</small></p>
            <p class="comentario">${comentario} <br><span style="color:gold">${'★'.repeat(calificacion)}</span></p>
        </div>
    `;

    document.querySelector(".linea-tiempo").prepend(nuevaOpinion);
    this.reset();
});
