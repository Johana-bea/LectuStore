document.addEventListener('contextmenu',function (e) {
 e.preventDefault();
 alert("Click derecho inhabilitado");
})
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.key ==='c') {
    e.preventDefault();
    alert("Precionaste una tecla Ctrl + C")
  }
})
document.addEventListener('keydown',function (event) {
    if (event.key === 'f12'|| event.keyCode === 123) {
        event.preventDefault();
        alert("Precionaste la tecla F12");
    }
})

document.addEventListener('keydown',function (event) {
    if (event.key === 'T'|| event.keyCode === 13) {
        event.preventDefault();
        alert("Precionaste la tecla T");
    }
})