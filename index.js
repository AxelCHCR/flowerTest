const teAmoSection = document.getElementById('te-amo-section');

// Función para generar un color hexadecimal aleatorio
function colorAleatorio() {
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(() => {
  const mensaje = document.createElement('div');
  mensaje.textContent = 'Te amo';
  mensaje.style.opacity = 0;
  mensaje.style.transition = 'opacity 0.6s';
  mensaje.style.color = colorAleatorio(); // Asignar color aleatorio al texto
  teAmoSection.appendChild(mensaje);
  setTimeout(() => {
    mensaje.style.opacity = 1;
  }, 50);
}, 1000);
