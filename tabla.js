 var datos = JSON.parse(localStorage.getItem('datos')) || [];
    var tablaCuerpo = document.getElementById('tabla-cuerpo');
    datos.forEach(function(dato) {
    var fila = document.createElement('tr');
    fila.innerHTML = '<td>' + dato.nombre + '</td><td>' + dato.email + '</td><td>' + dato.direccion + '</td><td>' + dato.numero +'</td><td>' + dato.edad +'</td>';
    tablaCuerpo.appendChild(fila);
});