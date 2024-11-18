const restablecer = document.getElementById('btnReestablecer');
const contadorVisual = document.getElementById('contadorVisitas');
const veces = document.getElementById('veces');

let contador = localStorage.getItem('contador');

if (contador === null || !contador) {
  contador = 0;
}

veces.textContent = contador == 1? " vez" : " veces";
contadorVisual.textContent = contador;

contador++;
localStorage.setItem('contador', contador);

restablecer.addEventListener('click', () => {
  localStorage.clear();
  window.location.reload();
});

