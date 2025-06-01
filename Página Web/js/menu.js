// js/menu.js
document.addEventListener("DOMContentLoaded", async () => {
  const lista = document.getElementById("lista-algoritmos");

  try {
    // Obtener listado de archivos JSON
    const res = await fetch("algoritmos/listado.json");
    const archivos = await res.json();

    lista.innerHTML = ""; // limpiar "Cargando..."

    for (let archivo of archivos) {
      const ruta = `algoritmos/${archivo}`;

      try {
        const resAlg = await fetch(ruta);
        const data = await resAlg.json();

        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `visor.html?id=${data.id}`;
        a.textContent = data.nombre;
        li.appendChild(a);
        lista.appendChild(li);
      } catch (err) {
        console.error(`No se pudo cargar ${archivo}:`, err);
      }
    }
  } catch (err) {
    console.error("Error al cargar listado.json:", err);
    lista.innerHTML = "<li>Error cargando algoritmos</li>";
  }
});