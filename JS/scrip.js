function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}
// *********************************************************
const menu_mobil = document.getElementById('menu-mobil');
const menu = document.getElementById('menu');

menu_mobil.addEventListener('click', () => {
  menu.classList.toggle('active');
})
// **********************************************************
function moverCarrusel(direccion) {
  const carrusel = document.getElementById('carrusel');
  const tarjeta = carrusel.querySelector('.tarjeta');
  const desplazamiento = tarjeta.offsetWidth + 20; 
  carrusel.scrollBy({
    left: direccion * desplazamiento,
    behavior: 'smooth'
  });
}
// ***********************************************************
function moverSliderEditoriales(direccion) {
  const slider = document.getElementById('slider-editoriales');
  const item = slider.querySelector('.editorial-logo-item');
  const desplazamiento = item.offsetWidth + 40; 
  slider.scrollBy({
    left: direccion * desplazamiento,
    behavior: 'smooth'
  });
}

