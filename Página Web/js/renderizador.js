document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
  
    if (!id) {
      document.getElementById("titulo").textContent = "Algoritmo no encontrado";
      return;
    }
  
    try {
      const res = await fetch(`algoritmos/${id}.json`);
      const data = await res.json();
  
      document.getElementById("titulo").textContent = data.nombre || "Algoritmo sin nombre";
      document.getElementById("descripcion").textContent = data.descripcion || "";
      document.getElementById("diagrama").textContent = data.diagram || "";
      document.getElementById("notas").textContent = data.notas || "";

      mermaid.initialize({ startOnLoad: true });
      mermaid.run();
    } catch (err) {
      document.getElementById("titulo").textContent = "Error al cargar el algoritmo";
      console.error("Error al cargar el JSON:", err);
    }
  });  