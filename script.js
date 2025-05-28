const socket = io();

// Mostrar registros ya guardados al cargar la página
fetch("/registros")
  .then(res => res.json())
  .then(corredores => {
    corredores.forEach(corredor => agregarFila(corredor));
  });

// Escuchar registros en tiempo real
socket.on("nuevoRegistro", (corredor) => {
  agregarFila(corredor);
});

// Función para agregar una fila a la tabla
function agregarFila(corredor) {
  const tabla = document.querySelector("#tablaRegistros tbody");
  const fila = tabla.insertRow();
  fila.innerHTML = `
    <td>${corredor.posicion}</td>
    <td>${corredor.kiid}</td>
    <td>${corredor.nombre}</td>
    <td>${corredor.apellidoP}</td>
    <td>${corredor.apellidoM}</td>
    <td>${corredor.carrera}</td>
    <td>${corredor.categoria}</td>
    <td>${corredor.tiempoInicio}</td>
    <td>${corredor.tiempoFinal}</td>
  `;
}

// Enviar formulario
document.getElementById("registroForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const datos = Object.fromEntries(formData.entries());

  const res = await fetch("/registro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datos),
  });

  if (res.ok) {
    e.target.reset();
    console.log("Registro enviado");
  } else {
    alert("Error al registrar");
  }
});