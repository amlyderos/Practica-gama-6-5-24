function agregarDatos() {
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var direccion = document.getElementById('direccion').value;
  var numero = document.getElementById('numero').value;
  var edad = document.getElementById('edad').value;
  var datos = JSON.parse(localStorage.getItem('datos')) || [];
  datos.push({nombre: nombre, email: email, direccion: direccion, numero: numero, edad: edad});
  localStorage.setItem('datos', JSON.stringify(datos));
  window.location.href = "Datos.html"
}